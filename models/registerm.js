const momgoose =require ("mongoose")
const validator = require('validator');


const registerSchema= new momgoose.Schema({

fname:{
  type:String,
  required:true,
},
sname:{
    type:String,
    required:true,
},


email:{
  type:String,
    required:true,
    unique:true,
    validator(value){
        if(!validator.isEmail(value)){s
            throw new Error ("email validations errors")
        }
    }
},

gender:{
type:String,
required:true,

},


phone:{
type:Number,
unique:true,
min:10,
required:true,
},

password:{
    type:String,
    minlength:4,
    required:true,
},


cpassword:{
    type:String,
    minlength:4,
    required:true,
},

})


const registerdata= new momgoose.model("register",registerSchema)


module.exports=registerdata;