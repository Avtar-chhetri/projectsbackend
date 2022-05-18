const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/lore").then(()=>{

console.log("db connections sucess dev")
}).catch((err)=>{

    console.log(err)
})