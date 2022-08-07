// import antlr from "antlr4";
import { CharStreams, CommonTokenStream, CommonToken } from 'antlr4ts';
import { styleTags, tags, Tag } from "@lezer/highlight";
import { StreamLanguage, /* HighlightStyle,*/ } from "@codemirror/language";
// import { tags } from "@lezer/highlight";
import { CustomColumnExpressionsLexer } from './antrl4-lang-grammar/CustomColumnExpressionsLexer';

function getStyleNameByTag(tag: Tag): string {
    for (let t in tags) {
        if ((tags as any)[t] === tag) {
            return t;
        }
    }

    return '';
}
function getTokenNameByTokenValue(tokenValue: number): string {
    const lexer = CustomColumnExpressionsLexer;
    for (let tokenName in lexer) {
        if (((lexer as any)[tokenName] as number) === tokenValue) {
            return tokenName;
        }
    }

    return '';
}

function getTokens(tokens: CommonToken[]) {
    return tokens.map((token) => {
        return { 
            tokenName: getTokenNameByTokenValue(token.type),
            text: token.text || '',
            type: token.type,
            startIndex: token.startIndex,
            stopIndex: token.stopIndex
        };
    });
}

export function getTokensForText(text: string) {
    var chars = CharStreams.fromString(text);
    var lexer = new CustomColumnExpressionsLexer(chars);
    var tokensStream = new CommonTokenStream(lexer);
    tokensStream.fill();
    return getTokens((tokensStream as any).tokens);
  }


// const myHighlightStyle = HighlightStyle.define([
//   { tag: tags.keyword, color: "#fc6" },
//   { tag: tags.comment, color: "#f5d", fontStyle: "italic" }
// ]);

  export const antrl4Lang = StreamLanguage.define({
    token: (stream, state) => {
        const tokens = getTokensForText(stream.string);
        const nextToken = tokens.filter(t => t.startIndex >= stream.pos)[0];
        // we iterate over the stream and match the token text to advance the stream
        // returning the token type that is used for the styling
        if (nextToken.type !== CustomColumnExpressionsLexer.EOF && stream.match(nextToken.text)) {
            let valueClass = getStyleNameByTag(tags.keyword);

            switch (nextToken.type) {
                case CustomColumnExpressionsLexer.STRING_VALUE:
                    valueClass = getStyleNameByTag(tags.string);
                    break;
                case CustomColumnExpressionsLexer.NUMERIC_VALUE:
                    valueClass = getStyleNameByTag(tags.number);
                    break;
                default: 
                    valueClass ='keyword';
                    break;
             }

            return valueClass;
        } else {
            stream.next();
            return null;
        }
    },
    tokenTable: {
        // Identifier: tags.keyword,
        // Boolean: tags.bool,
        // String: tags.string,
        // LineComment: tags.lineComment,
    }
});