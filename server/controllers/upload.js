import jwtDecode from 'jwt-decode';
import ContentModel from '../models/contentModel.js';

export const uploadContent = async (req, res) => {
    const content = req.body;
    // req.channelId = jwtDecode(req.headers.authorization.split(' ')[1]).sub;
    const { channelID } = req.params;
    const { channelname: channelName, channellogo: channelLogo } = req.query;

    const newContent = new ContentModel( { ...content, channelID, channelName, channelLogo, createdAt: new Date().toDateString() } );

    try {
        await newContent.save();
        res.status(200).json({ message: 'Video Uploaded Successfully'});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const fetchContents = async (req, res) => {

    try {
            const contents = await ContentModel.find();
            res.status(200).json({ data: contents });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}