import CodeMirrorEditor from "./codemirror-editor";

export default function App() {

const doc = `IF(PLUS(1,2) > 2) + 1 + 2 + 'test'`;
  return <CodeMirrorEditor doc={doc} />;
}
