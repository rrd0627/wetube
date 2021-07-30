import mongoose from "mongoose";;

const videoSchema = new mongoose.Schema({
    title: {type: String,require:true},
    description: String,
    createdAt: {type: Number,require:true},
    hashtahs: [{type:String}],
    meta:{
        views:Number,
        rating:Number,
    },
});

const Video = mongoose.model("Video",videoSchema);
export default Video;