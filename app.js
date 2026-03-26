const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const errorMSG = {}
const status = {}

mongoose.connect("mongodb+srv://feranmikejawa:%40Kingfero18@cluster0.avfow95.mongodb.net/?appName=Cluster0")
const kittySchema = new mongoose.Schema({name:String})
const kitten = new mongoose.model('Kitten', kittySchema)



app.use(express.urlencoded({extended:true}))
app.get("/api/server/status", (req,res) =>{
status.msg = "Server is up and ready";
res.json(status)
})
app.post("/api/submit-cat", async(req,res) => {
main(res.req.body.catName)
res.json({msg: "Cat name submitted successfully"})
})
app.listen(PORT, ()=> {
console.log("API is listening on Port: ", PORT)
})


async function main(kittenName) {
    
    const kitty1 = new kitten({name: kittenName})
    console.log(kitty1.name)
    kitty1.save() 
}