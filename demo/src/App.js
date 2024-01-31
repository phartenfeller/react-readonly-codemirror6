import useRocm from "react-readonly-codemirror6";
import "./App.css";
import code from "./code.js";
import refSource from "./refSource.js";

function App() {
  const ref = useRocm({
    code: code.js,
    lang: "js",
    fontSize: 14,
  });

  const refCss = useRocm({
    code: code.css,
    lang: "css",
    fontSize: 16,
  });

  const refPlsql = useRocm({
    code: code.plsql,
    lang: "plsql",
    fontSize: 22,
  });

  const refHtml = useRocm({
    code: code.html,
    lang: "html",
    fontSize: 14,
  });

  const refXml = useRocm({
    code: code.xml,
    lang: "xml",
    fontSize: 14,
  });

  const refGo = useRocm({
    code: code.go,
    lang: "go",
    fontSize: 14,
  });

  const refPython = useRocm({
    code: code.python,
    lang: "python",
    fontSize: 14,
  });

  const refYaml = useRocm({
    code: code.yaml,
    lang: "yaml",
    fontSize: 14,
  });

  const refDockerfile = useRocm({
    code: code.dockerfile,
    lang: "dockerfile",
    fontSize: 14,
  });

  const refBash = useRocm({
    code: code.shell,
    lang: "bash",
    fontSize: 14,
  });

  const refJson = useRocm({
    code: code.json,
    lang: "json",
    fontSize: 10,
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
        <div style={{ marginTop: "32px" }}>
          <h2>JS - 14 px</h2>
          <div ref={ref} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>CSS - 16 px</h2>
          <div ref={refCss} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>SQL (Oracle) - 22px</h2>
          <div ref={refPlsql} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>HTML</h2>
          <div ref={refHtml} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>XML</h2>
          <div ref={refXml} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>Go</h2>
          <div ref={refGo} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>Python</h2>
          <div ref={refPython} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>YAML</h2>
          <div ref={refYaml} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>Dockerfile</h2>
          <div ref={refDockerfile} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>Bash/Shell</h2>
          <div ref={refBash} />
        </div>

        <div style={{ marginTop: "32px" }}>
          <h2>JSON - 10px</h2>
          <div ref={refJson} />
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
