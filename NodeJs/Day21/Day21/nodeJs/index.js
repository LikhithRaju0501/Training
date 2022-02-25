// const url=require('url')
// const parseUrl=url.parse('https://www.npmjs.com/search?q=rsuite',true)
// console.log(parseUrl);

const http=require('http')
const url=require('url')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const path=req.url;
    console.log(path);
    if(path=='/about'){
        res.writeHead(200,{
            'content-type':'text/html'
        })
        console.log("About");
        const fileData=fs.readFileSync('./index.html')
        res.write(fileData)
        res.end()
    }
    // res.write("Welcome")
    // res.end()
})
server.listen(4000)