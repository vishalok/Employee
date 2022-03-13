var http = require('http');
var fs = require("fs");
var server = http.createServer(function(req,res){

   //res.end("<h1>welcome</h1>")

if(req.method === "GET"){
      //console.log("Calling via GET Method");
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream("./html/form.html","utf-8").pipe(res);
  
    
}else if(req.method === "POST"){
    //console.log("Calling via POST Method");
    var data = "";
    req.on("data",function(chunk){
        data +=chunk;
    });
    req.on("end",function(){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("Data Saved sucessfully!!! <br>")
        res.write("<a href='./html/form.html'>Click here to go back</a><br>")
       
        
        /************ 
         * res.end(`
        ${data}
        `);
        ***********/
        const fs = require("fs");
        
        const obj = JSON.stringify(data);
        
        
        
        fs.appendFileSync("./jsonNodejs/data.json",obj,(err)=>{
            if(err) throw err;
            console.log("Done");
        })
        console.log(obj);
        
        
/********** */
    });
}

});
server.listen(9000);