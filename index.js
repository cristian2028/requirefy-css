var fs = require('fs');
var vm = require('vm');

var code = fs.readFileSync(__dirname+'/node_modules/require-css/css.js','utf8');
var test = vm.createScript(code);
test.runInNewContext({
    define:function(func){
        module.exports = func();
    },
    setInterval:window.setInterval
});