import ROCodeMirror from "react-readonly-codemirror6";
import "./App.css";

const code = `const x = 1;
console.log(x + 1 + 'test');`;

function App() {
  // const extensions = [javascript(), oneDarkHighlightStyle, oneDarkTheme];

  const ref = ROCodeMirror({
    code: code,
    lang: "js",
    fontSize: 14,
  });

  const refCss = ROCodeMirror({
    code: `.App-header {
  background-color: #415c94;
  color: #fff;
  margin-bottom: 12px;
}

.header-text {
  padding: 12px;
  margin: 0;
}`,
    lang: "css",
    fontSize: 16,
  });

  const refPlsql = ROCodeMirror({
    code: `insert into table (id, name) values (1, 'test');`,
    langExtension: "plsql",
    fontSize: 22,
  });

  return (
    <div className="body-div">
      <header className="App-header">
        <h1 className="header-text">React Codemirror Demo</h1>
      </header>
      <main className="main-div">
        <div ref={ref} />

        <div style={{ marginTop: "32px" }}>
          <div ref={refCss} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <div ref={refPlsql} />
        </div>
      </main>
    </div>
  );
}

export default App;
