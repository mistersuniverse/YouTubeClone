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
    console.log("hi1")
    try {
        const { data } = await api.fetchContents();
        console.log("hi2");
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

export const deleteContent = async (channelID) => {
    try { 
        await api.deleteContent(channelID);

        console.log(`deleted ${channelID}`);
    } catch (error) {
        console.log(error);
    }
}