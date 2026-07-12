const express = require("express")

const app = express();

app.get("/",(_,res)=>{
    return res.status(200).json({
	message : `Server working as expected ${Math.floor(Math.random()*10)}`,
	status: "pass"
    })
})

app.listen('4000',()=>{
    console.log("test server running on PORT: 4000")
})
