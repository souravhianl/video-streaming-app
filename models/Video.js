const mongoose=require('mongoose')

const VideoSchema=new mongoose.Schema({
    title:String,
    description:String,
    videoUrl:String,
});

module.exports = mongoose.model('videos',VideoSchema);