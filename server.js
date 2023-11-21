const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const videosRouter= require('./routes/videos');

const app=express()
const PORT=process.env.PORT||5000;
app.use(cors());
app.use(express.json());
//Connect to mongodb

mongoose.connect('mongodb+srv://souravhianl:souravmongo@cluster0.1ica5fa.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use the videosRouter for all routes related to videos
app.use('/videos',videosRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});