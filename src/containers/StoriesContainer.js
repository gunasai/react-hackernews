import React, { useEffect, useState } from 'react';
import { getStoryIDs, getStory } from '../services/hnAPI';
import { Story } from '../components/Story';
import {
    GlobalStyle,
    StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
    const [storyIDs, setStoryIDs] = useState([]);

    useEffect(() => {
        getStoryIDs().then((data) => setStoryIDs(data));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIDs.map((storyID) => (
                    <Story key={storyID} storyID={storyID} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
};
