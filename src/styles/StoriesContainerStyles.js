import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-box-sizing: 'border-box';
        box-sizing: 'border-box';
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
        
    }

    main h1 {
        color: ${({ theme }) =>
            theme === lightTheme ? theme.title : theme.text};
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;

export const lightTheme = {
    body: '#fafafe',
    text: 'rgb(187, 46, 31)',
    title: 'black',
};

export const darkTheme = {
    body: '#1c2022',
    text: 'rgb(203, 203, 203)',
};

export const StoriesContainerWrapper = styled.main`
    max-width: 1140px;
    padding: 20px 15px;
    margin: 0 auto;
`;

export const StoriesContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        padding: 0;
        border: none;
        background: none;
        font-size: 16px;
    }
`;

export const StoriesList = styled.ul`
    padding: 0;
`;
