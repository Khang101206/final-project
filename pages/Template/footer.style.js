import styled from 'styled-components';

export const FooterPage = styled.div`
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 48px 200px;
    justify-content: space-between;
    position: relative;
    height: auto;


`;

export const CopyRight = styled.div`
    font-size: 12px;
    color: white;
    text-align: center;
    margin-top: 1rem;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 1rem;
    min-width: 200px;


    a {
        color: #fff;
        margin: 0.5rem 0;
        text-decoration: none;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

