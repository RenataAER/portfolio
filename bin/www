const http = require('http');

http.createServer((req, res)=> {
    res.writeHead(200, {"Contente-type" : "texy/plain"});
        switch(req.url){
            case "/":
                res.end("Home")
                break;
            case "/about":
                res.end("About me")
                break;
            case "/projects":
                res.end("See my projects")
                break;
            case "/qualification":
                res.end("My qualification") 
                break;
            default:
                res.end("Are you lost?")
                break;              
        }
}).listen(3000);