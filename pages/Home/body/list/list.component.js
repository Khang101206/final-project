import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from "./title/title.component";
import { List } from "./list.styled";
import AdsBanner from './ads-banner/ads-banner.component';
import Item from "./item/item.component";
import { ListItem } from "./list.styled";
import SideBar from "./side-bar/side-bar.component";
import { fetchDestinations } from "../../../../redux/destination/destinations.slice";


const Body = () => {
  const dispatch = useDispatch();
  const {loading, list} = useSelector(state => state.destinations);
  
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const popularDestinations = list.filter(destination => destination.tag.includes('popular'));
  const attractiveDestinations = list.filter(destination => destination.tag.includes('attractive'));
  const namePopularDes = popularDestinations.map(destination => destination.name);
  const nameAtractiveDes = attractiveDestinations.map(destination => destination.name);
  return (
    <List>
      <div>
        <AdsBanner></AdsBanner>
        <Title/>
        <SideBar items={namePopularDes}/> 
        <ListItem>
          {popularDestinations.map((destination, index) => (
            <Item key={index} name={destination.name} price={destination.price} rate={destination.rating} img ={destination.image} review={destination.review}></Item>
          ))}
        </ListItem>
      </div>
      <div>
        <Title/>
        <SideBar items={nameAtractiveDes}/> 
        <ListItem>
          {attractiveDestinations.map((destination, index) => (
            <Item key={index} name={destination.name} price={destination.price} rate={destination.rating} img ={destination.image} review={destination.review}></Item>
          ))}
        </ListItem>
      </div>
    </List>
  );
};

export default Body;
