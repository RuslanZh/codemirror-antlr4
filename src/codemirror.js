import {
  drawSelection,
  // EditorView,
  highlightActiveLine,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  highlightActiveLineGutter
} from "@codemirror/view";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { stex } from "@codemirror/legacy-modes/mode/stex";
import { completions } from "./completion";
import { wordHover } from "./hover-tooltip";
// import { tags } from "@lezer/highlight";
import {
  syntaxHighlighting,
  // HighlightStyle,
  defaultHighlightStyle,
  indentOnInput,
  StreamLanguage
} from "@codemirror/language";
// const myHighlightStyle = HighlightStyle.define([
//   { tag: tags.keyword, color: "#fc6" },
//   { tag: tags.comment, color: "#f5d", fontStyle: "italic" }
// ]);

const texLanguage = StreamLanguage.define(stex);
export function createView({ doc, parent }) {
  const extensions = [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    drawSelection(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap]),
    texLanguage,
    wordHover,
    completions
  ];

  const state = EditorState.create({ doc, extensions });

  return new EditorView({ state, parent });
}
