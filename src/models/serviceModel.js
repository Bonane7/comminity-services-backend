import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({

    title:{
        type: String,
        require:[true,'please title is required']
    },
    description:{
        type: String,
        require:[true,'please description is required']
    },
    categorys:{
        type:mongoose.Schema.types.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        require:[true, 'please description is required']
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type : Date,
        default: new Date(Date.now())
    }

});



    serviceSchema.pre(/^find/,function(next){
        this.populate({
            path:"category", select:"categoryName"
        }).populate({
            path:"provider", select:"names email"
        })
        next()
    })
    
const Service = mongoose.model("Service", serviceSchema)
export default Service