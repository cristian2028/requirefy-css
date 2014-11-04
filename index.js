/**
 * Code from:
 * https://github.com/guybedford/require-css
 */
var fs = require('fs');
var vm = require('vm');

var includeInThisContext = function(path) {
    var code = fs.readFileSync(path);
    var test = vm.createScript(code, path);
    test.runInNewContext({
        define:function(func){
            console.log(func())
            module.exports = func();
        }
    });

}.bind(this);
includeInThisContext(__dirname+"/node_modules/require-css/css.js");
