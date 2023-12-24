const { Schema, default: mongoose } =require("mongoose");

const topicSchema=new Schema(
    {
        fullName:{
            type:String
        },
        job:{
            type:String
        }
    },
    {
        timestamps:true,
    }
);

export default  mongoose.model.Topic || mongoose.model("Topic")
