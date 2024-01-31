const code = {
  js: `const x = 1;
  console.log(x + 1 + 'test');
  
  function test() {
    return 1;
  }`,
  css: `.App-header {
    background-color: #415c94;
    color: #fff;
    margin-bottom: 12px;
  }
  
  .header-text {
    padding: 12px;
    margin: 0;
  }`,
  plsql: `insert into table (id, name) values (1, 'test');

begin
  null;
exception
  when others then
    raise;
end;`,
  html: `<div>
  <h1 class="font-bold">Test</h1>
  <p>Test</p>
</div>`,
  xml: `<drivers>
  <driver>
    <name age="30">John</name>
    <car>McLaren</car>
  </driver>
</drivers>`,
  java: `public class Test {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`, // java does not work
  python: `import os
import sys

def main():
  print("Hello World")
  `, // python does not work
  rust: `fn main() {
  println!("Hello World");
}
`, // rust does not work
  php: `<?php
echo "Hello World";#
`, // php does not work
  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`,
  go: `package main

import "fmt"

func main() {
  fmt.Println("Hello World")
}`,
  shell: `#!/bin/bash
echo "Hello World"
ps -ef | grep "test"
sudo apt-get update
`,
  dockerfile: `FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
`,
  yaml: `version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
    environment:
      FLASK_ENV: development
`,
  json: `{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}`,
  markdown: `# Hello World
## Hello World

- test
[link](https://www.google.com)`,
};

export default code;
