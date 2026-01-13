import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    names:{
        type:String,
        required:[true,"Please provide your name"],
    },
    email:{
        type:String,
        require:[true, "Please provide your email"],
        unique:true
    },
    password:{
        type: String,
        require:[true, "Please provide your email"]
    },
    role:{
        type:String,
        enum:['client', 'provider', 'admin'],
        default:"client"
    },
    createdAt:{
        type:Date,
        default: new Date(Date.now())
    }
})

const User = mongoose.model("User", userSchema)