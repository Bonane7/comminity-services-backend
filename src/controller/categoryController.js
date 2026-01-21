import Category from "../models/category.js"

class CategoryController{
    static createCategory = async(req,res)=>{
        const category = await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:"Category not Created"})
        }else{
            return res.status(201).json({message:"category successfuly created", category})
        }
    }

    static findAllCategory = async(req,res)=>{
        const category = await Category.find()
        if(!category){
            return res.status(404).json({message:"category note found"})
        }else{
            return res.status(201).json({message:"categories Finded success", category})
        }
    }
    static findOneCategory = async (req,res)=>{
        const id = req.params.id
        const category = await Category.findById(id)
        if(!category){
            return res.status(404).json({message:"category note found"})
        }else{
            return res.status(201).json({message:"category Finded success", category})
        }
    }

    static upDateCategary = async (req,res)=>{
        const id = req.params.id
        const category = await Category.findByIdAndUpdate(id)
        if(!category){
            return res.status(404).json({message:"category not found"})
        }else{
            return res.status(201).json({message: "Category Successfuly Update",})
        }
    }
    static deleteOneCategory = async (req,res)=>{
        const id = req.params.id
        const category = await Category.findByIdAndDelete(id)
        if(!category){
            return res.status(404).json({message:"not category find"})
        }else{
            return res.status(201).json({message: "Category deleted succefuly", category})
        }
    }
    static deleteAllCategory = async(req,res)=>{
        const category =await Category.deleteMany()
        if(!category){
            return res.status(404).json({message:"non one category existed"})
        }else{
            return res.status(201).json({message:"Oll categories are Deleted successfuly"})
        }
    }
}



export default CategoryController