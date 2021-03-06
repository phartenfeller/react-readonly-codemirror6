import useRocm from "react-readonly-codemirror6";
import "./App.css";
import refSource from "./refSource.js";

const code = `const x = 1;
console.log(x + 1 + 'test');`;

function App() {
  const ref = useRocm({
    code: code,
    lang: "js",
    fontSize: 14,
  });

  const refCss = useRocm({
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

  const refPlsql = useRocm({
    code: `insert into table (id, name) values (1, 'test');`,
    lang: "plsql",
    fontSize: 22,
  });

  const refSrc = useRocm({
    code: refSource,
    lang: "jsx",
    fontSize: 14,
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

        <div style={{ marginTop: "64px" }}>
          <h2>Source</h2>
          <div ref={refSrc} />
        </div>
      </main>
    </div>
  );
}

export default App;
