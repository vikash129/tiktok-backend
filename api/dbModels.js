import mongoose from 'mongoose'

const videoSchema = mongoose.Schema({
    videoUrl : String ,
    song : String ,
    channel : String ,
    description : String,
    likes : Number ,
    comments : Number ,
    share : Number 
})

export default mongoose.model('videoModel' , videoSchema)

