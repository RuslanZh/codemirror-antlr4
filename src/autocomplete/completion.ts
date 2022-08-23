import { CustomColumnExpressionsLexer } from "../antrl4-lang-grammar/CustomColumnExpressionsLexer";
import { CustomColumnExpressionsParser } from "../antrl4-lang-grammar/CustomColumnExpressionsParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";
// import { KotlinParser, VariableReadContext } from "./parser/KotlinParser";
import {
  CodeCompletionCore,
  ScopedSymbol,
  SymbolTable,
  //   VariableSymbol,
} from "antlr4-c3";
import { ParseTree, TerminalNode } from "antlr4ts/tree";
import { SymbolTableVisitor } from "./symbol-table-visitor";
import { Symbol } from "antlr4-c3/out/src/SymbolTable";
import {
  CaretPosition,
  ComputeTokenPositionFunction,
  TokenPosition,
} from "./types";
// import * as fuzzysort from 'fuzzysort';

// export function getScope(
//   context: ParseTree | undefined,
//   symbolTable: SymbolTable
// ): Promise<Symbol|undefined> {
//   if (!context) {
//     return undefined;
//   }
//   const scope = symbolTable.symbolWithContext(context);
//   if (scope) {
//     return scope;
//   } else {
//     return getScope(context.parent, symbolTable);
//   }
// }

// export function getAllSymbolsOfType<T extends Symbol>(
//   scope: ScopedSymbol,
//   type: new (...args: any[]) => T
// ): T[] {
//   let symbols = scope.getSymbolsOfType(type);
//   let parent = scope.parent;
//   while (parent && !(parent instanceof ScopedSymbol)) {
//     parent = parent.parent;
//   }
//   if (parent) {
//     symbols.push(...getAllSymbolsOfType(parent as ScopedSymbol, type));
//   }
//   return symbols;
// }

// function suggestVariables(symbolTable: SymbolTable, position: TokenPosition) {
//   const context = position.context;
//   const scope = getScope(context, symbolTable);
//   let symbols: Symbol[];
//   if (scope instanceof ScopedSymbol) {
//     //Local scope
//     symbols = getAllSymbolsOfType(scope, VariableSymbol);
//   } else {
//     //Global scope
//     symbols = symbolTable.getSymbolsOfType(VariableSymbol);
//   }
//   let variable = position.context;
//   while (!(variable instanceof VariableReadContext) && variable.parent) {
//     variable = variable.parent;
//   }
//   return filterTokens(
//     variable ? position.text : "",
//     symbols.map((s) => s.name)
//   );
// }

export function filterTokens_startsWith(text: string, candidates: string[]) {
  if (text.trim().length === 0) {
    return candidates;
  } else {
    return candidates.filter((c) =>
      c.toLowerCase().startsWith(text.toLowerCase())
    );
  }
}

// export function filterTokens_fuzzySearch(text: string, candidates: string[]) {
//   if (text.trim().length === 0) {
//     return candidates;
//   } else {
//     return fuzzysort.go(text, candidates).map((r) => r.target);
//   }
// }

export let filterTokens = filterTokens_startsWith;

export function setTokenMatcher(
  fn: (text: string, candidates: string[]) => string[]
) {
  filterTokens = fn;
}

export function getSuggestionsForParseTree(
  parser: CustomColumnExpressionsParser,
  parseTree: ParseTree,
  symbolTableFn: () => SymbolTable,
  position: TokenPosition
) {
  let core = new CodeCompletionCore(parser);
  // Luckily, the Kotlin lexer defines all keywords and identifiers after operators,
  // so we can simply exclude the first non-keyword tokens
  let ignored: any[] = []; // Array.from(Array(CustomColumnExpressionsParser.FILE).keys());
  //   ignored.push(
  //     CustomColumnExpressionsParser.BinLiteral,
  //     CustomColumnExpressionsParser.BooleanLiteral,
  //     CustomColumnExpressionsParser.CharacterLiteral,
  //     CustomColumnExpressionsParser.DoubleLiteral,
  //     CustomColumnExpressionsParser.HexLiteral,
  //     CustomColumnExpressionsParser.IntegerLiteral,
  //     CustomColumnExpressionsParser.LongLiteral,
  //     CustomColumnExpressionsParser.NullLiteral,
  //     CustomColumnExpressionsParser.RealLiteral,
  //     CustomColumnExpressionsParser.DelimitedComment,
  //     CustomColumnExpressionsParser.LineComment
  //   );
  //   ignored.push(
  //     CustomColumnExpressionsParser.QUOTE_OPEN,
  //     CustomColumnExpressionsParser.QUOTE_CLOSE,
  //     CustomColumnExpressionsParser.TRIPLE_QUOTE_OPEN
  //   );
  //   ignored.push(
  //     CustomColumnExpressionsParser.LabelDefinition,
  //     CustomColumnExpressionsParser.LabelReference
  //   ); // We don't handle labels for simplicity
  core.ignoredTokens = new Set(ignored);
  //   core.preferredRules = new Set([
  //     CustomColumnExpressionsParser.RULE_variableRead,
  //     CustomColumnExpressionsParser.RULE_suggestArgument,
  //   ]);
  let candidates = core.collectCandidates(position.index);

  let completions = [];
  //   if (
  //     candidates.rules.has(CustomColumnExpressionsParser.RULE_variableRead) ||
  //     candidates.rules.has(CustomColumnExpressionsParser.RULE_suggestArgument)
  //   ) {
  //     completions.push(...suggestVariables(symbolTableFn(), position));
  //   }
  let tokens: any[] = [];
  candidates.tokens.forEach((token, key) => {
    // if (key === CustomColumnExpressionsParser.Identifier) {
    //   // Skip, we’ve already handled it above
    // }
    /* else if (k == CustomColumnExpressionsParser.NOT_IN) {
      tokens.push("!in");
    } else if (k == CustomColumnExpressionsParser.NOT_IS) {
      tokens.push("!is");
    }*/ // else {
    const symbolicName = parser.vocabulary.getSymbolicName(key);
    if (symbolicName) {
      tokens.push(symbolicName.toLowerCase());
    }
    // }
  });
  const isIgnoredToken =
    position.context instanceof TerminalNode &&
    ignored.indexOf(position.context.symbol.type) >= 0;
  const textToMatch = isIgnoredToken ? "" : position.text;

  completions.push(...filterTokens(textToMatch, tokens));

  return completions;
}

export function getSuggestions(
  text: string,
  caretPosition: CaretPosition,
  computeTokenPosition: ComputeTokenPositionFunction
) {
  let input = CharStreams.fromString(text);
  let lexer = new CustomColumnExpressionsLexer(input);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new CustomColumnExpressionsParser(tokenStream);

  let parseTree = parser.objectExpression();

  let position = computeTokenPosition(parseTree, tokenStream, caretPosition);
  if (!position) {
    return [];
  }
  return getSuggestionsForParseTree(
    parser,
    parseTree,
    () => new SymbolTableVisitor().visit(parseTree),
    position
  );
}
