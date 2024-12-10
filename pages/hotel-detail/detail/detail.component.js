import React, { useEffect } from 'react';
import './detail.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHotelById } from '../../../redux/hotel/hotels.slice';  // Import your thunk

const Detail = () => {
  const { id } = useParams();  // Get the hotel ID from the URL
  const dispatch = useDispatch();


  const { loading: hotelsLoading, list: hotelsList, detail: hotel, error: hotelsError } = useSelector(state => state.hotels);

  // Fetch the specific hotel details when the component is mounted
  useEffect(() => {
    dispatch(fetchHotelById(id));  // Dispatch the fetchHotelById thunk with the hotel ID
  }, [dispatch, id]);

  if (hotelsLoading) return <div>Loading...</div>;
  if (hotelsError) return <div>Error: {hotelsError}</div>;
  if (!hotel) return <div>Hotel not found</div>;  // Check if the hotel detail is fetched
  console.log(hotel.data.hotel.name);
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="hotel-imgs">
          <img src={hotel.data.hotel.img} alt={hotel.data.hotel.name} />
          <div className='hotel-img'>
            {/* Display multiple images */}
            <img src={hotel.data.hotel.img} alt={hotel.data.hotel.name} />
            <img src={hotel.data.hotel.img} alt={hotel.data.hotel.name} />
            <img src={hotel.data.hotel.img} alt={hotel.data.hotel.name} />
            <img src={hotel.data.hotel.img} alt={hotel.data.hotel.name} />
          </div>
        </div>
        <div className="hotel-content">
          <h2 className="hotel-title">{hotel.data.hotel.name}</h2>
          <a href="/" className="hotel-link">Return</a>
          <div className="hotel-rating">
            {/* Add rating or reviews here if needed */}
          </div>

          <div className="hotel-price">
            <p className="last-price">Old Price: <span>{hotel.data.hotel.oldPrice}$</span></p>
            <p className="new-price">New Price: <span>{hotel.data.hotel.price}$ (5%)</span></p>
          </div>

          <div className="hotel-detail">
            <h2>About this room:</h2>
            <p>{hotel.data.hotel.description}</p>
            <ul>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/bed.png" alt="bed"/> Bed: <span>{hotel.data.hotel.bed}</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/wifi.png" alt="wifi"/> Wifi: <span>{hotel.data.hotel.Wifi}</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/fluency-systems-filled/50/central-air-conditioning.png" alt="air-conditioning"/> Air condition: <span>{hotel.data.hotel.airCondition}</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/parking.png" alt="parking"/> Private parking: <span>{hotel.data.hotel.privateParking}</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-filled/50/swimming-pool.png" alt="pool"/> Pool: <span>{hotel.data.hotel.pool}</span></li>
            </ul>
          </div>

          <div className="purchase-info">
            <button type="button" className="btn">
              Book <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Detail;
