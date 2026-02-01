import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error: ", err));

const shopSchema = new mongoose.Schema({
    domain:{
        type:String,
        required:true,
        unique:true
    },
    installedAt:{
        type:Date,
        default:Date.now
    }

})
const messageSchema = new mongoose.Schema({
  content: {
    type: String,   
    required: true, 
  }
  
})
export const myapp = mongoose.model("datafetches",shopSchema);
export const Message = mongoose.model("messagefetches",messageSchema);
