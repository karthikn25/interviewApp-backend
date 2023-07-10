import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

export function dbConnection(){
    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/interview",params)
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log("Error Connecting DB---",error)
    }
}