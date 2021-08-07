import axios from 'axios';
import { selectFields } from '../utils/selectFields';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyID) => {
    const result = await axios
        .get(`${storyURL + storyID}.json`)
        .then(({ data }) => data && selectFields(data));

    return result;
};

export const getStoryIDs = async () => {
    const result = await axios.get(newStoriesURL).then(({ data }) => data);

    return result;
};
