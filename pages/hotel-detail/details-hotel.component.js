import React from 'react';
import Detail from "./detail/detail.component"
import HotelPage from "../Hotels/hotel-page.styles"
import FilterBox from "../Hotels/body/list/filter-box/filter-box.component"

const DetailsHotel = () =>{

  return (
      <HotelPage>
          <Detail/>
      </HotelPage>
  )
}

export default DetailsHotel;