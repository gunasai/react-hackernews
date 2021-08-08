import styled from 'styled-components';

export const StoryWrapper = styled.li`
    list-style-type: none;
    margin: 20px 0;
`;

export const StoryTitle = styled.h1`
    font-size: 18px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
    }
`;

export const StoryMeta = styled.p`
    color: gray;
    margin-top: 0;
`;
