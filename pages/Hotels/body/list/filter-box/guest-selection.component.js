import React, { useState } from 'react';
import './guest-selection.css';

const GuestSelection = ({ guests, setGuests }) => {
  const handleGuestChange = (name, value) => {
    setGuests((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="guest-selection">
      {[
        {
          name: 'adults',
          label: 'Adults',
          description: 'Ages 13+',
          min: 0,
          max: 10,
        },
        {
          name: 'children',
          label: 'Children',
          description: 'Ages 4-12',
          min: 0,
          max: 10,
        },
        {
          name: 'infants',
          label: 'Infants',
          description: 'Under 4 years old',
          min: 0,
          max: 10,
        },
      ].map(({ name, label, description, min, max }) => (
        <div key={name} className="guest-type">
          <div>
            <label>{label}</label>
            <small>{description}</small>
          </div>
          <div className="guest-controls">
            <button
              type="button"
              onClick={() =>
                handleGuestChange(name, Math.max(guests[name] - 1, min))
              }
              disabled={guests[name] <= min}
            >
              -
            </button>
            <span>{guests[name]}</span>
            <button
              type="button"
              onClick={() =>
                handleGuestChange(name, Math.min(guests[name] + 1, max))
              }
              disabled={guests[name] >= max}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestSelection;
