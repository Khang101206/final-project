import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem;
  font-family: Arial, sans-serif;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid #E5E5E5;
`;

export const TabItem = styled.button`
  background-color: ${props => (props.isActive ? '#1A2B7B' : '#F1F3F5')};
  color: ${props => (props.isActive ? '#FFFFFF' : '#1A2B7B')};
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  margin-right: 8px;
  border: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.isActive ? '#1A2B7B' : '#E5E5E5')};
  }
`;

export const TabContent = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 0 4px 4px 4px;
  padding: 2rem;
  margin-top: -1px;

  div{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    width: 100%;
    height: 100%;
  }

  a{
    cursor: pointer;
  }
`;
