import React, { useEffect } from 'react';
import Detail from "./detail/detail.component"
import HotelPage from "../Hotels/hotel-page.styles"
import FilterBox from "../Hotels/body/list/filter-box/filter-box.component"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from '../../redux/destination/destinations.slice';

const DetailsHotel = () =>{
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.destinations);
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
      <HotelPage>
          <FilterBox/>
          <Detail/>
      </HotelPage>
  )
}

export default DetailsHotel;