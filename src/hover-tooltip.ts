import { hoverTooltip } from "@codemirror/view";
import { getTokensForText } from "./antrl4-lang";

export const wordHover = hoverTooltip((view, pos, side) => {
  let { from, to, text } = view.state.doc.lineAt(pos);
  const tokens = getTokensForText(text);
  let start = pos;
  let end = pos;

  const currToken = tokens.find(
    (t) => t.startIndex <= pos - from && t.stopIndex >= pos - from
  );

  if (!currToken) {
    return null;
  }
  start = currToken.startIndex + from;
  end = currToken.stopIndex + from + 1;

  return {
    pos: start,
    end,
    above: true,
    create(view: any) {
      let dom = document.createElement("div");
      dom.textContent = view.state.doc.slice(start, end);
      return { dom };
    },
  };
});
