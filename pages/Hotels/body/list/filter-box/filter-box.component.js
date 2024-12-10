import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './filter-box.styled.css';
import GuestSelection from './guest-selection.component';

const FilterBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [isGuestSelectionVisible, setIsGuestSelectionVisible] = useState(false);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    setCheckOutDate('');
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const toggleGuestSelection = () => {
    setIsGuestSelectionVisible((prev) => !prev);
  };

  const handleSearchClick = () => {
    onSearch({location, checkInDate, checkOutDate, guests });
  };

console.log(location.toLowerCase());


  return (
    <div className="header__image__container">
      <div className="header__content">
        <h1>Enjoy Your Dream Vacation</h1>
        <p>Book Hotels, Flights and stay packages at the lowest price.</p>
      </div>
      <div className="booking__container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form__group">
            <div className="input__group">
              <input type="text" value={location} onChange={handleInputChange} />
              <label>Location</label>
            </div>
            <p>Where are you going?</p>
          </div>
          <div className="form__group">
            <div className="input__group">
              <input
                type="date"
                value={checkInDate}
                onChange={handleCheckInChange}
              />
              <label>Check In</label>
            </div>
            <p>Add date</p>
          </div>
          <div className="form__group">
            <div className="input__group">
              <input
                type="date"
                value={checkOutDate}
                onChange={handleCheckOutChange}
                min={
                  checkInDate
                    ? new Date(
                        new Date(checkInDate).setDate(
                          new Date(checkInDate).getDate() + 1
                        )
                      )
                        .toISOString()
                        .split('T')[0]
                    : ''
                }
              />
              <label>Check Out</label>
            </div>
            <p>Add date</p>
          </div>
          <div className="form__group">
            <div className="input__group">
              <div onClick={toggleGuestSelection} className="guest-input">
                {`${guests.adults} Adults, ${guests.children} Children, ${guests.infants} Infants`}
              </div>
              <label>Guests</label>
            </div>
            <p>Add guests</p>
          </div>
        </form>
        <button className="btn" onClick={handleSearchClick}>
          <img width="24" height="24" src="https://img.icons8.com/windows/32/FFFFFF/search--v1.png" alt="search--v1" />
        </button>
      </div>
      {isGuestSelectionVisible && (
        <GuestSelection guests={guests} setGuests={setGuests} />
      )}
    </div>
  );
};

FilterBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FilterBox;
