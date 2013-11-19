# queryall
Convert document.querySelectorAll's NodeList into an array.

## Usage
```js
var queryAll = require('queryall');

// document.querySelectorAll('.foo');
queryAll('.foo').forEach(function (el) {
  console.log(el);
});

// parent.querySelectorAll('.foo');
var parent = document.querySelector('.parent');
queryAll('.foo', parent).forEach(function (el) {
  console.log(el);
});
```

## Install
With [npm](https://npmjs.org) do

```bash
$ npm install queryall
```
