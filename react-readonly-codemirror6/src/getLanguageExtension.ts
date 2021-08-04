import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { plSQL } from '@codemirror/legacy-modes/mode/sql';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { StreamLanguage } from '@codemirror/stream-parser';

function getLanguageExtension(language: string) {
  // https://github.com/codemirror/legacy-modes
  const lang = language ? language.replace(`language-`, '') : null;
  switch (lang) {
    case 'javascript':
    case 'js':
      return javascript();
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
      return StreamLanguage.define(shell);
    case 'sql':
    case 'plsql':
    case 'pl/sql':
      return StreamLanguage.define(plSQL);
    case 'yaml':
    case 'yml':
      return StreamLanguage.define(yaml);
    default:
      if (lang) {
        // eslint-disable-next-line no-console
        console.warn(
          `Unhandeled language in CodeMirror ${lang}. Fallback to default JavaScript`
        );
      }
      return javascript();
  }
}

export default getLanguageExtension;
