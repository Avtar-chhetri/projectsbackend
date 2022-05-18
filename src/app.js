const express =require("express")
const app= express();
const port=process.env.PORT || 8000;
const path=require("path")
const hbs=require("hbs")




//require the db
require("../db/conn")

const registerdata= require("../models/registerm")



app.use(express.json())
app.use(express.urlencoded({extended:false}));



//for dynamic contents
const dynamicpath=  path.join(__dirname,"../public/components")
console.log(dynamicpath)
const partialspath=  path.join(__dirname,"../public/partials")
console.log(partialspath)

app.set('view engine',"hbs");
app.set("views",dynamicpath);
hbs.registerPartials(partialspath)

//server roputing 
//home page

app.get("/",(req,res)=>{

    res.render("index.hbs")
})



app.get("/register" ,(req,res)=>{
    res.render("register")
})


app.use(express.json())
app.post("/register",async (req,res)=>{


//post man
// try{
//     const user = new  registerdata(req.body);
//     const result = await user.save()
//     res.send(result)
//     console.log(result)
// }catch(err){
//     res.send(err)
// }


// res.send(req.body.fname)
// console.log(req.body.fname)

try{
const passwordq=req.body.password;
const cpasswordq=req.body.cpassword;
console.log( passwordq,cpasswordq)


if(passwordq === cpasswordq){
//make the documents
const redisterdoc= new registerdata({

     fname:req.body.fname,
     sname:req.body.sname,
     email:req.body.email,
     gender:req.body.gender,
     phone:req.body.phone,
     password:req.body.password,
   cpassword:req.body.cpassword,
 
})
  
const result = await redisterdoc.save()
// res.send(result )
res.render("index")
console.log(result)
}else{

    res.send("password no match")
}
}catch(err){

    res.send(err)
}
})

//listining the req 

app.listen(port,(err)=>{

    console.log(`this servier is running from ${port}`)
})