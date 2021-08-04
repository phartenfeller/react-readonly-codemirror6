import { javascript } from "@codemirror/lang-javascript";
import {
  oneDarkHighlightStyle,
  oneDarkTheme
} from "@codemirror/theme-one-dark";
import ROCodeMirror from "react-readonly-codemirror6";
import "./App.css";

const code = `const CodeMirror = ({ children, lang }) => {
  const editorParentRef = useRef();
  const editorRef = useRef();

  const language = getLanguage(lang);

  // Initilize view
  useEffect(() => {
    if (editorRef.current === undefined) {
      const FontSizeTheme = EditorView.theme({
        '&': {
          fontSize: '14px',
        },
      });

      editorRef.current = new EditorView({
        state: EditorState.create({
          doc: children,
          extensions: [
            lineNumbers(),
            language,
            oneDark,
            FontSizeTheme,
            EditorView.editable.of(false),
          ],
        }),
        parent: editorParentRef.current,
        lineWrapping: true,
      });
    }
  }, [editorRef, editorParentRef, children, language]);

  return (
    <div
      id="codemirror-editor-wrapper"
      style={{ maxWidth: '100%' }}
      ref={editorParentRef}
    />
  );
};`;

function App() {
  const extensions = [javascript(), oneDarkHighlightStyle, oneDarkTheme];

  return (
    <div>
      <header className="App-header">
        <h1 className="header-text">React Codemirror Demo</h1>
      </header>
      <main>
        <ROCodeMirror language="javascript" extensions={extensions}>
          {code}
        </ROCodeMirror>
        <div style={{ marginTop: "400px" }}></div>
        {/* <LocalCM language="js">console.log('wat');</LocalCM> */}
        <div style={{ marginTop: "400px" }}></div>
        {/* <TestClass language="js">console.log('wat');</TestClass> */}
        <div style={{ marginTop: "400px" }}></div>
        {/* <ROCodeMirror language="js">console.log('wat');</ROCodeMirror> */}
      </main>
    </div>
  );
}

export default App;
