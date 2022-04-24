# Readonly Codemirror 6 React Component

I use this component for server-side generated code previews (with Gatsby). It uses [Codemirror 6](https://codemirror.net/6/) which is currently in preview.

## How to use

```jsx
import useRocm from "react-readonly-codemirror6";

const myComponent = () => {
  const codeRef = useRocm({
    code: 'console.log("Hello World!");',
    lang: "js",
    fontSize: 14,
  });

  return (
    <div ref={codeRef} />
  );
}
```
