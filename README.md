# requirefy-css

## Description
Loads a css file from a module in the browser. Implemented using  [browserify](http://browserify.org/)

Based on [require-css](https://github.com/guybedford/require-css) code.

## Installation

    $ npm install --save-dev requirefy-css 

## Usage

```js

var requirefy = require('requirefy-css');

var cssPath = '/path/to/style';// (without .css)

requirefy(cssPath,function(){
    console.log('css loaded');
});

```

## Run Example
in example folder:
browserify -t brfs script.js > bundle.js

start the server:
node server.js


## Maintained by
- Cristian Hernandez (UI Dev)
- E-mail: [cristianhernandez@gmail.com](mailto:cristianhernandez@gmail.com)
## License
Licensed under the MIT license.

Copyright (c) 2014