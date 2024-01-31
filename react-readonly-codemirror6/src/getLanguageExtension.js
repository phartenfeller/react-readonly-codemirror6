import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { StreamLanguage } from '@codemirror/language';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { go } from '@codemirror/legacy-modes/mode/go';
import { python } from '@codemirror/legacy-modes/mode/python';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { plSQL } from '@codemirror/legacy-modes/mode/sql';
import { xml } from '@codemirror/legacy-modes/mode/xml';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';

function getLanguageExtension(language) {
  // https://github.com/codemirror/legacy-modes
  const lang = language ? language.replace(`language-`, '') : null;
  switch (lang) {
    case 'javascript':
    case 'js':
      return javascript();
    case 'jsx':
      return javascript({ jsx: true });
    case 'json':
      return json();
    case 'css':
      return css();
    case 'html':
      return html();
    case 'dockerfile':
      return StreamLanguage.define(dockerFile);
    case 'sh':
    case 'bash':
    case 'service':
    case 'shell':
    case 'zsh':
    case 'txt':
      return StreamLanguage.define(shell);
    case 'sql':
    case 'plsql':
    case 'pl/sql':
      return StreamLanguage.define(plSQL);
    case 'yaml':
    case 'yml':
      return StreamLanguage.define(yaml);
    case 'py':
    case 'python':
      return StreamLanguage.define(python);
    case 'xml':
      return StreamLanguage.define(xml);
    case 'go':
    case 'golang':
      return StreamLanguage.define(go);
    // case 'md':
    // case 'markdown':
    //   return markdown();
    default:
      if (lang) {
        // eslint-disable-next-line no-console
        console.warn(
          `Unhandeled language for CodeMirror: "${lang}". Fallback to default "shell"`,
        );
      }
      return StreamLanguage.define(shell);
  }
}

export default getLanguageExtension;
