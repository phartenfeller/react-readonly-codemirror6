import CodeMirror from 'react-readonly-codemirror6';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="header-text">React Codemirror Demo</h1>
      </header>
      <main>
        <CodeMirror>
          let x = 2;
        </CodeMirror>
      </main>
    </div>
  );
}

export default App;
