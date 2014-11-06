var fs = require('fs');
var vm = require('vm');

var code = fs.readFileSync(__dirname+'/node_modules/require-css/css.js','utf8');
var requireModule = vm.createScript(code);


function createModule(func){
    var requireLoad = func();
    var req = {
        toUrl:function(url){
            return url;
        }
    }
    var loadWrapper = function(cssId, callback){
        requireLoad.load(cssId,req,callback);
    }
    module.exports = loadWrapper;
}

// TODO: Review the scope of this function
define = createModule;
requireModule.runInThisContext();