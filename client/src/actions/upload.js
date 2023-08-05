import * as api from '../api';

export const uploadContent = async ( contentDataData ) => {
    const userInfo = JSON.parse(localStorage.getItem('userProfile')).userInfo;

    try {
        const { data } = await api.uploadContent(contentDataData, userInfo.sub, userInfo.name, userInfo.picture);

    } catch (error) {
        console.log(error);
    }
} 

export const fetchContents = async () => {
    try {
        const { data } = await api.fetchContents();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchContentsByChannel = async (channelID) => {
    try {
        const { data } = await api.fetchContentsByChannel(channelID);
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const fetchContentByID = async (contentID) => {
    try {

        const { data }= await api.fetchContentByID(contentID); 
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const fetchChannelByContent = async (channelID) => {
    try {

        const { data }= await api.fetchChannelByContent(channelID); 
        return data;

    } catch (error) {
        console.log(error);
    }
}


    
export const deleteContent = async (channelID) => {
    try { 
        await api.deleteContent(channelID);

        console.log(`deleted ${channelID}`);
    } catch (error) {
        console.log(error);
    }
}