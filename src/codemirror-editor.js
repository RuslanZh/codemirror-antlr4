import { useEffect, useRef } from "react";

import { createView } from "./codemirror";

export default function CodeMirrorEditor({ doc }) {
  const ref = useRef(null);

  useEffect(() => {
    const view = createView({
      doc,
      parent: ref.current
    });

    // Disabled because it steals focus from the CSB editor :)
    // view.focus();

    return () => {
      view.destroy();
    };
  }, [doc]);

  return <div ref={ref} style={{ height: "100%", overflow: "auto" }}></div>;
}
