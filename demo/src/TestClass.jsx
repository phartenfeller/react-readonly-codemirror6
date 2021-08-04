import { lineNumbers } from "@codemirror/gutter";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import React from "react";
import getLanguageExtension from "./getLanguageExtension.js";

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.editorParentRef = React.createRef();
    this.editorRef = React.createRef();
    this.langExtension = getLanguageExtension(props.language);

    this.code = props.children;

    this.view = null;
  }

  componentDidMount() {
    console.log("didMount", this.editorRef);
    if (!this.editorRef.current) {
      const FontSizeTheme = EditorView.theme({
        "&": {
          fontSize: "14px",
        },
      });

      console.log("moduke", {
        lineNumbers,
        langExtension: this.langExtension,
        oneDark,
        FontSizeTheme,
      });

      this.view = new EditorView({
        state: EditorState.create({
          doc: this.code,
          extensions: [
            lineNumbers(),
            this.langExtension,
            oneDark,
            FontSizeTheme,
            defaultHighlightStyle.fallback,
            EditorView.editable.of(false),
          ],
        }),
        parent: this.editorParentRef.current,
        lineWrapping: true,
      });

      this.editorRef.current = this.view;
      console.log("EditorView working", this.view);
    }
  }

  componentWillUnmount() {
    if (this.view) {
      this.view.destroy();
    }
  }

  render() {
    return (
      <div className="cm-wrapper">
        <div ref={this.editorParentRef} />
      </div>
    );
  }
}

export default TestClass;
