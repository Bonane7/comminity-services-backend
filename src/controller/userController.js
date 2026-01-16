import User from "../models/userModel.js"
import bcrypt from "bcrypt"

class controller {

static signup=async(req,res)=>{
    const {names,email,password,role} = req.body
    const hashPassword = bcrypt.hashSync(req.body.password,10)
 try {
       const user = await User.create({names,email,password:hashPassword,role})
    if(!user){
        return res.status(400).json({message: "creation user failed"});
    }else{
        return res.status(201).json({message: "User successfuly created",user})
    }
 } catch (error) {
    console.log(error)
    return res.status(500).json({message:`Creat user failed ${error}`})
 }
}
static login =async(req, resp)=>{
    const {email,password}= req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({message:"Invalid Email"})
    }else{
        const comparePassword = bcrypt.compareSync(password,user,password)
        if(!comparePassword){
            return res.status(404).json({message:"Invalide password"})
        }else{
            const
        }
    }
}



}







export default controller;