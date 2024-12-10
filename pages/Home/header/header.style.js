import styled from 'styled-components';

export const BoxTabs =  styled.div `
    font-size: larger;
    color: #000;
    background-color: #e8e8e8;
    height: 30%rem;
    min-width: 100%;
` 

export const BoxTabsItem = styled.div`
    display: flex;
    flex-direction: column;
`
export const Top = styled.div`
    display: flex;
    padding: 1rem 3rem;
    align-items: center;
    gap: 3rem;
    justify-content: space-between;
` 

export const Title = styled.div`
    cursor: pointer;
    font-family: 'Lobster', sans-serif;
    font-size:  clamp(2.5rem, 2.25rem + 1.300vw, 2.570rem);
`
export const Title_Searchbox =styled.div`
    display: flex;
    gap: 3rem;
    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 1rem;
    }
` 
export const SearchBox = styled.input`
    float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;

`

export const SignInButton = styled.div`

    height: 3rem;
    width: 5rem;
    border: 1px solid #00d6e4;
    border-radius: 10%;
`
export const SignInText = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
`

export const SideMenuBar = styled.div`
    display: flex;
    padding: 1rem 3rem;
    gap: 2rem;
`
export const ItemMenu = styled.a`
    color: #9f9f9f;
    font-size: 16px;
    cursor: pointer;
` 

