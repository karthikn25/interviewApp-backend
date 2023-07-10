import express from 'express';
import { Notes } from '../models/notes.js';

const router = express.Router();

router.get("/all",async(req,res)=>{
    try {
        const date = new Date().toJSON().slice(0,10)
        res.status(200).json({message:date})
    } catch (error) {
    
    }
})

router.post("/add",async (req,res)=>{
    try {
         //new date function
    const postedDate = new Date().toJSON().slice(0,10);
    const notes = await new Notes(
        {...req.body,
        date:postedDate,
        user: req.user._id
    }
    ).save() 
    
    if(!notes){
     return res.status(400).json({message:"Error in saving the notes"})
    }
  res.status(200).json({message:"Notes saved sucessfully",data:notes})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal server error"})
    }
   
})


export const  notesRouter = router;