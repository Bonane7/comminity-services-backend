import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }, 
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Service"
    },
    Date:{
        type:Date,
        require:[true, "Please Specify date you want this service"]
    },
    time:{
        type: String,
        require:[true, "Pease Specify Time You want this service"]
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'completed', 'cancelled'],
        default:"pending"
    },
    notes:{
        type:String,
        required: false
    },
    createdAt:{
        type : Date,
        default: new Date(Date.now())
    }

})
bookingSchema.pre(/^find/,function(next){
    this.populate(
        [
            {path:"client",select:"names email"},
            {path:"service",select:"title"}
        ]
    )
})

const BookingService = mongoose.model("Bookind", bookingSchema)

export default Booking