const http =require('http');
const url =require('url');
const fs =require('fs');
var Datainfo = require("/jsonNodejs/data.json");
const server = http.createServer(function(req,res){

    //localhost:9000/data.json

    const urlObject = url.parse(req.url, true);
    const fileName = "/jsonNodejs/data.json" + urlObject.pathname;

    fs.readFile(fileName, function(err,data){
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end("404 Not Found");
    }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end(JSON.stringify(Datainfo));
    });

});
server.listen(9000,()=> {
    console.log('server is running');
    
console.log(urlObject.host);
console.log(urlObject.pathname);
console.log(urlObject.search);
const queryData=urlObject.query
console.log(queryData.id);
});
