import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { oneDark } from '@codemirror/theme-one-dark';
import { useEffect, useRef } from 'react';
import getLanguageExtension from './src/getLanguageExtension';

const noPasteExtension = EditorView.domEventHandlers({
  paste: (event) => {
    // Prevent the default paste action
    event.preventDefault();
    return true; // This indicates that the event has been handled
  },
});

function getEditorView(parent) {
  return new EditorView({
    parent: parent.current,
  });
}

function initState({ code, lang }) {
  const language = getLanguageExtension(lang);

  return EditorState.create({
    doc: code,
    extensions: [
      noPasteExtension,
      basicSetup,
      oneDark,
      language,
      EditorView.editable.of(false),
      EditorView.lineWrapping,
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
      view.dom.style.fontSize = `${fontSize}px`;
      editorRef.current = view;

      const state = initState({
        lang,
        code,
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
