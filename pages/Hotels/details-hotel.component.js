import React, { useEffect } from 'react';
import Detail from "./detail/detail.component"
import hotelPage from "./hotel-page.styles"
import FilterBox from "./body/list/filter-box/filter-box.component"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from '../../redux/destination/destinations.slice';






const DetailsHotel = () =>{
  const dispatch = useDispatch();
  const {list} = useSelector(state => state.destinations);
  console.log(list);
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
      <hotelPage>
          <FilterBox/>
          <Detail/>
      </hotelPage>
  )
}

export default DetailsHotel;