import React from 'react';
import './detail.styles.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const { loading: hotelsLoading, list: hotelsList, error: hotelsError } = useSelector(state => state.hotels);

  // Find the specific hotel by ID
  const hotel = hotelsList.find(hotel => hotel.id === parseInt(id));

  if (hotelsLoading) return <div>Loading...</div>;
  if (hotelsError) return <div>Error: {hotelsError}</div>;
  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="hotel-imgs">
          <img src={hotel.img} alt={hotel.name} />
          <div className='hotel-img'>
            <img src={hotel.img} alt={hotel.name} />
            <img src={hotel.img} alt={hotel.name} />
            <img src={hotel.img} alt={hotel.name} />
            <img src={hotel.img} alt={hotel.name} />
          </div>
        </div>
        <div className="hotel-content">
          <h2 className="hotel-title">{hotel.name}</h2>
          <a href="/" className="hotel-link">Return</a>
          <div className="hotel-rating">
            {/* You can add rating display here if needed */}
          </div>

          <div className="hotel-price">
            <p className="last-price">Old Price: <span>{hotel.oldPrice}$</span></p>
            <p className="new-price">New Price: <span>{hotel.price}$ (5%)</span></p>
          </div>

          <div className="hotel-detail">
            <h2>About this room:</h2>
            <p>{hotel.description}</p>
            <ul>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/bed.png" alt="bed"/>Bed: <span>2</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/wifi.png" alt="wifi"/>Wifi: <span>Yes</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/fluency-systems-filled/50/central-air-conditioning.png" alt="central-air-conditioning"/>Air condition: <span>Yes</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-glyphs/30/parking.png" alt="parking"/>Private parking: <span>Yes</span></li>
              <li><img width="30" height="18" src="https://img.icons8.com/ios-filled/50/swimming-pool.png" alt="swimming-pool"/>Pool: <span>Yes</span></li>
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
