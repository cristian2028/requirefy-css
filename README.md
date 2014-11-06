# requirefy-css

> Loads a css file from a module

Based on [require-css](https://github.com/guybedford/require-css) code.

## Installation

    $ npm install requirefy-css

## How-to

var requirefy = require('requirefy-css');

var cssPath = '/path/to/style';// (without .css)

requirefy(cssPath,function(){
    console.log('css loaded');
});

## Run Example
in example folder:
browserify -t brfs script.js > bundle.js

start the server:
node server.js


## Maintained by
- Cristian Hernandez (UI Dev)
- E-mail: [cristianhernandez@gmail.com](mailto:cristianhernandez@gmail.com)
- Twitter: [@cristian2028](http://twitter.com/cristian2028)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).