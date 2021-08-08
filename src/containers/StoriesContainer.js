import React, { useEffect, useState, memo } from 'react';
import { getStoryIDs, getStory } from '../services/hnAPI';
import { Story } from '../components/Story';
import {
    GlobalStyle,
    StoriesContainerWrapper,
    StoriesContainerTitle,
    StoriesList,
    darkTheme,
    lightTheme,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ThemeProvider } from 'styled-components';

export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIDs, setStoryIDs] = useState([]);
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

    useEffect(() => {
        getStoryIDs().then((data) => setStoryIDs(data));
    }, [count]);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyle />
                <StoriesContainerWrapper data-test-id="stories-container">
                    <StoriesContainerTitle>
                        <h1>Hacker News Stories</h1>
                        <button onClick={toggleTheme}>
                            {isDarkTheme ? (
                                <span aria-label="light-mode">☀️</span>
                            ) : (
                                <span aria-label="dark-mode">🌙</span>
                            )}
                        </button>
                    </StoriesContainerTitle>
                    <StoriesList>
                        {storyIDs.slice(0, count).map((storyID) => (
                            <Story key={storyID} storyID={storyID} />
                        ))}
                    </StoriesList>
                </StoriesContainerWrapper>
            </>
        </ThemeProvider>
    );
};
