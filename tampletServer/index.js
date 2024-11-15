const { name } = require("ejs")
const express = require("express")

const app = express()

// ...view engine setup...
app.set("view engine","ejs")

// ...view folder...
app.set("views","public")

// ...api...
app.get("/",(req,res)=>{
    res.render("Home",{name:"nirmal",age:25})
})

app.get("/About",(req,res)=>{
    res.render("About",{msg:"this is a dynamic server created by EJS"})
})



const PORT = 3000
const hostname = "127.0.0.3"
app.listen(PORT,hostname,()=>{
    console.log(`server running at http://${hostname}:${PORT}`)
})