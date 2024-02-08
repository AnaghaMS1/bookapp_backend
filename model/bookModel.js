const mongoose=require("mongoose")

const bookSchema =new mongoose.Schema(
    {
        bookName:String,
        authorName:String,
        publisherName:String
      
    }
)
module.exports=mongoose.model("book",bookSchema)