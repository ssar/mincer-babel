# Mincer Babel

[Babeljs ES6](https://babeljs.io/) transformation engine for [Mincer](https://github.com/nodeca/mincer).

## Installation

Install from npm registry:

```
$ npm install mincer-babel
```

or add `mincer-babel` to your `package.json`:

```json
"dependencies": {
  "mincer-babel": "0.0.4"
}
```


## Usage

```js
var Mincer = require('mincer');

require('mincer-babel')(Mincer);
```

Now files with `.es6` extension will be compiled to ES5 JavaScript using `Babel`.


## Running Tests

```
$ npm install --development
$ npm test
```


## License

The MIT License (MIT)

Copyright © 2015 Simon Schuler <simon.schuler@itds.ch>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
