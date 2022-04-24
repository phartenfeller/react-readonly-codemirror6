(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(18),a=t.n(c),r=t(28),s=t.n(r),o=(t(40),t(7)),i=t(32),d=t(2),l=t(4),f=t(27),u=t(24),p=t(34),j=t(21),m=t(33),b=t(35),x=t(29),h=t(30),g=t(31),v=t(25);var O=function(e){var n=e?e.replace("language-",""):null;switch(n){case"javascript":case"js":return Object(j.a)();case"jsx":return Object(j.a)({jsx:!0});case"json":return Object(m.a)();case"css":return Object(u.a)();case"html":return Object(p.a)();case"dockerfile":return v.a.define(b.a);case"sh":case"bash":case"service":case"shell":return v.a.define(x.a);case"sql":case"plsql":case"pl/sql":return v.a.define(h.a);case"yaml":case"yml":return v.a.define(g.a);default:return n&&console.warn('Unhandeled language for CodeMirror: "'.concat(n,'". Fallback to default JavaScript')),Object(j.a)()}};function S(e=14){return o.d.theme({"&":{fontSize:`${e}px`}})}var y=({code:e,lang:n,fontSize:t})=>{const a=Object(c.useRef)(null),r=Object(c.useRef)(null);return Object(c.useEffect)((()=>{if(!r.current){const s=(c=a,new o.d({parent:c.current}));r.current=s;const u=function({code:e,lang:n,fontSize:t}){const c=O(n);return l.e.create({doc:e,extensions:[Object(i.a)(),c,f.b,f.a,S(t),d.b.fallback,o.d.editable.of(!1)]})}({lang:n,code:e,fontSize:t});return s.setState(u),()=>{s.destroy()}}var c;return()=>null}),[r,a,e,t,n]),a},z=(t(41),t(14));var C=function(){var e=y({code:"const x = 1;\nconsole.log(x + 1 + 'test');",lang:"js",fontSize:14}),n=y({code:".App-header {\n  background-color: #415c94;\n  color: #fff;\n  margin-bottom: 12px;\n}\n\n.header-text {\n  padding: 12px;\n  margin: 0;\n}",lang:"css",fontSize:16}),t=y({code:"insert into table (id, name) values (1, 'test');",lang:"plsql",fontSize:22}),c=y({code:'\nimport useRocm from "react-readonly-codemirror6";\nimport "./App.css";\n\nconst code = `const x = 1;\nconsole.log(x + 1 + \'test\');`;\n\nfunction App() {\n  const ref = useRocm({\n    code: code,\n    lang: "js",\n    fontSize: 14,\n  });\n\n  const refCss = useRocm({\n    code: `.App-header {\n  background-color: #415c94;\n  color: #fff;\n  margin-bottom: 12px;\n}\n\n.header-text {\n  padding: 12px;\n  margin: 0;\n}`,\n    lang: "css",\n    fontSize: 16,\n  });\n\n  const refPlsql = useRocm({\n    code: `insert into table (id, name) values (1, \'test\');`,\n    langExtension: "plsql",\n    fontSize: 22,\n  });\n\n  return (\n    <div className="body-div">\n      <header className="App-header">\n        <h1 className="header-text">React Codemirror Demo</h1>\n      </header>\n      <main className="main-div">\n        <div ref={ref} />\n\n        <div style={{ marginTop: "32px" }}>\n          <div ref={refCss} />\n        </div>\n\n        <div style={{ marginTop: "32px" }}>\n          <div ref={refPlsql} />\n        </div>\n      </main>\n    </div>\n  );\n}\n\nexport default App;\n',lang:"jsx",fontSize:14});return Object(z.jsxs)("div",{className:"body-div",children:[Object(z.jsx)("header",{className:"App-header",children:Object(z.jsx)("h1",{className:"header-text",children:"React Codemirror Demo"})}),Object(z.jsxs)("main",{className:"main-div",children:[Object(z.jsx)("div",{ref:e}),Object(z.jsx)("div",{style:{marginTop:"32px"},children:Object(z.jsx)("div",{ref:n})}),Object(z.jsx)("div",{style:{marginTop:"32px"},children:Object(z.jsx)("div",{ref:t})}),Object(z.jsxs)("div",{style:{marginTop:"64px"},children:[Object(z.jsx)("h2",{children:"Source"}),Object(z.jsx)("div",{ref:c})]})]})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(C,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.580063cf.chunk.js.map