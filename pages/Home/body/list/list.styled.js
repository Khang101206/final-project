import styled from 'styled-components';

export const List = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20rem;
`
export const ListItem = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

`

export const Ads = styled.div`
    border: 20% solid 1px;
    height: 10rem;
`