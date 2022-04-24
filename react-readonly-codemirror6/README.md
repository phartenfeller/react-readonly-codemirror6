# Readonly Codemirror 6 React Hook

I use this component for server-side generated code previews (with Gatsby). It uses [Codemirror 6](https://codemirror.net/6/) which is currently in preview.

## Install

```sh
npm i react-readonly-codemirror6
yarn add react-readonly-codemirror6
```

## Demo

https://phartenfeller.github.io/react-readonly-codemirror6/

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

[List of currently supported languages](https://github.com/phartenfeller/react-readonly-codemirror6/blob/master/react-readonly-codemirror6/src/getLanguageExtension.js). Currently only ones I needed but can be extended.

## Missing

- TS Types
- Support more languages
- More configuration options

