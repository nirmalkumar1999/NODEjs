const http = require("http")
const fs = require("fs")

const app = http.createServer((req,res)=>{
    const {method,url}=req
    console.log(url,method)
    if(method == "GET"){
        if(url == "/"){
            // res.write("<h1>home page</h1>")
            // res.end()
            const data = fs.readFileSync("./pages/Home.html")
            res.write(data)
            res.end()
        }
        if(url == "/About"){
            // res.end("<h1>about page</h1>")
            const data = fs.readFileSync("./pages/About.html")
            res.end(data)
        }
        if(url == "/Home.css"){
            const data = fs.readFileSync("./css/Home.css")
            res.end(data)
        }
    }
})

app.listen(8000)//http://localhost:8000