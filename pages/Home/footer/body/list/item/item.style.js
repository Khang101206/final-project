import styled from 'styled-components';

export const FeaturedProperty = styled.div`
    position: relative;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    height: 500px;
    width: 300px;
    box-sizing: border-box;
    margin: 1rem 3rem;
    padding: 0;
    cursor: pointer;

`
export const ImgItem = styled.img`
    width: 100%;
    height: 70%;

`
export const NameItem = styled.div`
    font-family: 'Exo 2', sans-serif;
    font-size: 18px; 
    color: #000;
    font-weight: 600;
    padding: 1rem 2rem;
`

export const From = styled.div`
    color: #a7a7a7;
    font-size: 16px;
    display: flex;
    align-items: end;
    margin: 1rem;
    gap: 8px;
    margin-top: 18px;
    margin-left: 72px;
`

export const PriceItem = styled.div`
    font-size: 24px;
    color: #000;
`
export const Score = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    background-color: #003cb1;
    width: 60px;
    height: 2rem;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Exo 2', sans-serif;
`

export const Review = styled.div`
    color: #003cb1;
`

export const UserRate = styled.div`
    display: flex;
    align-items: center;
    margin: 0 16px;
    gap: 12px;
` 

