// kaushalyadav723
// GDPUzijJSm89PpxM
// mongodb+srv://kaushalyadav723:<password>@cluster0.h0fsfft.mongodb.net/?retryWrites=true&w=majority

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kaushalyadav723:GDPUzijJSm89PpxM@cluster0.h0fsfft.mongodb.net/Node_practise2?retryWrites=true");
const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connection to MongoDB 2"));
db.once("open",function(){
    console.log("connected to database successfully");
})


module.exports=db;