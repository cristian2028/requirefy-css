var cssLoader = require('../');
var req = {
    toUrl:function(url){
        return url;
    }
}
cssLoader.load('/example/style.css',req,function(){
    console.log("css loadded")
});