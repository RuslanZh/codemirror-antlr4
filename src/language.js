// import { parser } from "./parser.js"
// import {
//   LanguageSupport,
//   LRLanguage,
//   foldNodeProp,
//   foldInside,
//   indentNodeProp
// } from "@codemirror/language";
// import { styleTags, tags as t } from "@lezer/highlight";

// let parserWithMetadata = parser.configure({
//   props: [
//     styleTags({
//       Identifier: t.variableName,
//       Boolean: t.bool,
//       String: t.string,
//       LineComment: t.lineComment,
//       "( )": t.paren
//     }),
//     indentNodeProp.add({
//       Application: (context) => context.column(context.node.from) + context.unit
//     }),
//     foldNodeProp.add({
//       Application: foldInside
//     })
//   ]
// });

// export const exampleLang = LRLanguage.define({
//   parser: parserWithMetadata,
//   languageData: {
//     commentTokens: { line: ";" }
//   }
// });

// export function exampleLanguage() {
//   return new LanguageSupport(exampleLang, []);
// }
