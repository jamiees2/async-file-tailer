# async-file-tailer
[![Build Status](https://github.com/jamiees2/async-file-tailer/actions/workflows/main.yml/badge.svg)](https://github.com/jamiees2/async-file-tailer/actions)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Docs](https://img.shields.io/badge/Docs-latest-informational)](https://fluent.github.io/fluent-logger-forward-node/)

[![NPM](https://nodeico.herokuapp.com/async-file-tailer.svg)](https://npmjs.com/package/async-file-tailer)

## Install

    $ npm install async-file-tailer

## Usage
```js
const FileTailer = require("async-file-tailer");

const main = async () => {
    const tailer = new FileTailer("/tmp/foo");
    setTimeout(() => tailer.stop(), 10000); // stop tailing after 10 seconds
    for await (const line of tailer.watch()) {
        console.log("received", line);
    }
}
```
