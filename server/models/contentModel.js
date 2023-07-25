import mongoose from 'mongoose';

const contentSchema = mongoose.Schema({
    channelID: String,
    channelName: String,
    channelLogo: String,
    title: String,
    description: String,
    thumbnail: String,
    video: String,
    views: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ContentModel = mongoose.model('contents', contentSchema);

export default ContentModel;