import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { EditorState, Extension } from '@codemirror/state';
import {
  oneDarkHighlightStyle,
  oneDarkTheme,
} from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { RefObject } from 'react';
import getLanguageExtension from './getLanguageExtension';

const FontSizeTheme = EditorView.theme({
  '&': {
    fontSize: '14px',
  },
});

export function getEditorView(parent: RefObject<HTMLDivElement>): EditorView {
  return new EditorView({
    parent: parent.current as Element,
    // lineWrapping: true,
  });
}

export type initStateParams = {
  language: string;
  code: string;
  extionsions: Extension[];
};

export function initState({ code, language, extionsions }: initStateParams) {
  // const langExtension = getLanguageExtension(language);

  return EditorState.create({
    doc: code,
    extensions: extionsions,
    // extensions: [
    //   lineNumbers(),
    //   langExtension,
    //   oneDarkHighlightStyle,
    //   oneDarkTheme,
    //   FontSizeTheme,
    //   defaultHighlightStyle.fallback,
    //   EditorView.editable.of(false),
    // ],
  });
}
