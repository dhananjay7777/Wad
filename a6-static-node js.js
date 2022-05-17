const http=require('http');
const fs=require('fs');
const port=3000;




const server=http.createServer(function(req,res)
{

    res.writeHead(200,{context:'text/html'})
    fs.readFile('index.html',function(err,data)
    {
        res.write(data);
        res.end();
    })
})


server.listen(port,()=>console.log('server listening'))

//To run first type node a6-static.js in terminal and then on chrome type localhost:3000

