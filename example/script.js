var cssLoader = require('../');
var req = {
    toUrl:function(url){
        return url;
    }
}
cssLoader.load('style',req);