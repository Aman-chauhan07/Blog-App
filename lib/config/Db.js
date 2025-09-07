import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://amansingh:aman0715@cluster0.sczdcca.mongodb.net/blog-app')
    console.log("DB connected")
}