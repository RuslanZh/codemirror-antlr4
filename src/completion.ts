// Our list of completions (can be static, since the editor
/// will do filtering based on context).
import { autocompletion, CompletionContext } from "@codemirror/autocomplete";
import { computeTokenPosition, getSuggestions } from "./autocomplete";

const completionsList = [
  { label: "panic", type: "keyword" },
  { label: "park", type: "constant", info: "Test completion" },
  { label: "password", type: "variable" },
];

function langCompletions(context: CompletionContext) {
  let before = context.matchBefore(/\w+/);
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null;
  const line = context.state.doc.lineAt(context.pos);
  const column = context.pos - line.from;
  let correctedColumn = column;
  // while (
  //   context.state.doc.toString()?.[correctedColumn - 1] === " " &&
  //   correctedColumn > 0
  // ) {
  //   correctedColumn--;
  // }
  let suggestions = getSuggestions(
    context.state.doc.toString(),
    { line: line.number, column: correctedColumn },
    computeTokenPosition
  );

  return {
    from: before ? before.from : context.pos,
    options: completionsList,
    validFor: /^\w*$/,
  };
}

export const completions = autocompletion({ override: [langCompletions] });
