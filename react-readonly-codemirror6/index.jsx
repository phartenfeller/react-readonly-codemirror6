import { EditorView } from '@codemirror/view';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { EditorState } from '@codemirror/state';
import {
  oneDarkHighlightStyle,
  oneDarkTheme,
} from '@codemirror/theme-one-dark';
// eslint-disable-next-line import/no-unresolved
import { useEffect, useRef } from 'react';
import getLanguageExtension from './src/getLanguageExtension';

function getEditorView(parent) {
  return new EditorView({
    parent: parent.current,
    // lineWrapping: true,
  });
}

function getFontsizeTheme(size = 14) {
  return EditorView.theme({
    '&': {
      fontSize: `${size}px`,
    },
  });
}

function initState({ code, lang, fontSize }) {
  // const lg = langExtension();
  const language = getLanguageExtension(lang);

  return EditorState.create({
    doc: code,
    extensions: [
      lineNumbers(),
      language,
      oneDarkTheme,
      oneDarkHighlightStyle,
      getFontsizeTheme(fontSize),
      defaultHighlightStyle.fallback,
      EditorView.editable.of(false),
    ],
  });
}

const useRocm = ({ code, lang, fontSize }) => {
  const editorParentRef = useRef(null);
  const editorRef = useRef(null);

  // Initilize view
  useEffect(() => {
    if (!editorRef.current) {
      const view = getEditorView(editorParentRef);
      editorRef.current = view;
      // setEditorView(view);

      const state = initState({
        lang,
        code,
        fontSize,
        // extionsions: extensions,
      });
      view.setState(state);

      return () => {
        view.destroy();
      };
    }

    return () => null;
  }, [editorRef, editorParentRef, code, fontSize, lang]);

  return editorParentRef;
};

export default useRocm;
