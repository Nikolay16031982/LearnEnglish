const fs = require("fs")
const express = require("express")
const app = express()
const PORT = process.env.PORT||require("config").get("PORT")
app.get("/verbs",(req,res)=>{
    const content = fs.readFileSync("./data/a1/verbs.json", 'utf8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
console.log(content)
// res.type('text/plain')
    res.json(content)
})
app.listen(PORT,()=>console.log(`Server start on port ${PORT}`))