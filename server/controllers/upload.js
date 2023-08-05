import jwtDecode from 'jwt-decode';
import mongoose from 'mongoose';

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

export const fetchContentsByChannel = async (req, res) => {
    const { channelID } = req.params;

    try {
        const contentsByChannel = await ContentModel.find({channelID});
        
        res.status(200).json({ data: contentsByChannel});
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const fetchContentByID = async (req, res) => {
    const { contentID } = req.params;
    try {
        const contentByID = await ContentModel.find({_id: contentID});
        res.status(200).json({ data: contentByID});
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchChannelByContent = async (req, res) => {
    const { channelID } = req.params;
    try { 
        const channelbyContent = await UserModel.find({_id: channelID});

    } catch (error) {
    }
}

export const home = (req, res) => {
    res.send("Welcome to Backend Server of YouTube Clone App");
}