
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://aniket300699:aniket300699@cluster0.8zwhm.mongodb.net/products?retryWrites=true&w=majority");
    
 }

 
 module.exports=connectdb;
 