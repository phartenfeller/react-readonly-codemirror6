import { EditorView } from '@codemirror/view';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { getEditorView, initState } from './cmApi';

export type ROCodeMirrorProps = {
  language: string;
  children: string;
  extensions: any[];
};

const ROCodeMirror = ({
  children,
  language,
  extensions,
}: ROCodeMirrorProps) => {
  console.log({ children, language });

  const editorParentRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorView | null>(null);

  const [editorView, setEditorView] = useState<EditorView | null>(null);

  // Initilize view
  useEffect(() => {
    if (!editorRef.current) {
      const view = getEditorView(editorParentRef);

      editorRef.current = view;

      setEditorView(view);

      return () => {
        view.destroy();
      };
    }

    return () => null;
  }, [editorRef, editorParentRef]);

  useEffect(() => {
    if (!editorView) return;

    const state = initState({
      language: language,
      code: children,
      extionsions: extensions,
    });
    console.log('state =>', state);
    editorView.setState(state);

    console.log('state was set =>', editorView);
  }, [editorView, children, language]);

  return <div ref={editorParentRef} />;
};

// class ROCodeMirror extends React.Component {
//   constructor(props) {
//     super(props);
//     this.editorParentRef = React.createRef();
//     this.editorRef = React.createRef();
//     this.language = props.language;

//     this.code = props.children;

//     this.view = null;
//   }

//   componentDidMount() {
//     if (!this.editorRef.current) {
//       this.view = getEditorView({
//         parent: this.editorParentRef.current,
//         language: this.language,
//         code: this.code,
//       });
//       this.editorRef.current = this.view;
//       console.log('EditorView bugged', this.view);
//     }
//   }

//   componentWillUnmount() {
//     if (this.view) {
//       this.view.destroy();
//     }
//   }

//   render() {
//     return <div ref={this.editorParentRef} />;
//   }
// }

export default ROCodeMirror;
