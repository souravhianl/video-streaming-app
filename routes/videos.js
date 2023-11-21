const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

//Get all videos
router.get('/',async(req,res)=>{
    try{
        const videos= await Video.find();
        res.json(videos)
    } catch(error){
        res.status(500).json({message: error.message})
    }
});

//Get specific video 

router.get('/:id',getVideo,(req,res)=>{
    res.json(res.Video);
});

//Create a new video
router.post('/',async(req,res)=>{
    const video=new Video({
        title:req.body.title,
        description:req.body.description,
        videoUrl:req.body.videoUrl,
    });
    try{
        const newVideo=await video.save();
        res.status(201).json(newVideo);
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

//update a video
router.patch(':/id',getVideo,async(req,res)=>{
    if(req.body.title !=null){
        res.body.title=req.body.title;
    }
    if(req.body.description!=null){
        res.body.description=req.body.description;
    }
    if(req.body.videoUrl!=null){
        res.body.videoUrl=req.body.videoUrl;
    }
    try{
        const updatedVideo=await res.video.save();
        res.json(updatedVideo);
    } catch(error){
        res.status(400).json({message:error.message})
    }
});

//Delete a video
router.delete('/:id',getVideo,async(req,res)=>{
    try{
        await res.video.remove();
        res.json({message:'Video deleted successfuly'})
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

//Middleware to get a specific video by ID
async function getVideo(req,res,next){
    let video;
    try{
        video=await Video.findById(req.params.id);
        if(video==null){
            return res.status(404).json({message:'Video not found'})
        }
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    res.video=video;
    next();
}

module.exports=router;
