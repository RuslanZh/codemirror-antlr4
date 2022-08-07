// Our list of completions (can be static, since the editor
/// will do filtering based on context).
import { autocompletion } from "@codemirror/autocomplete";

const completionsList = [
  { label: "panic", type: "keyword" },
  { label: "park", type: "constant", info: "Test completion" },
  { label: "password", type: "variable" },
];

function langCompletions(context: any) {
  let before = context.matchBefore(/\w+/);
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  if (!context.explicit && !before) return null;
  return {
    from: before ? before.from : context.pos,
    options: completionsList,
    validFor: /^\w*$/,
  };
}

export const completions = autocompletion({ override: [langCompletions] });
