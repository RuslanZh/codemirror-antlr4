import CodeMirrorEditor from "./codemirror-editor";

export default function App() {
  const doc = String.raw`\documentclass{article}
\usepackage[utf8]{inputenc}

\title{Title}
\author{Ali}

\begin{document}

\maketitle

\section{Introduction}

\end{document}`;

  return <CodeMirrorEditor doc={doc} />;
}
