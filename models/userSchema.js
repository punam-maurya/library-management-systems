const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
});

const User=mongoose.model("User",userSchema);

module.exports=User;