import PropTypes from 'prop-types';
import { SideMenuBar, ItemMenu } from "./side-bar.styled";
import React, { useState } from "react";

const SideBar = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <SideMenuBar>
      {items && items.map((item, index) => (
        <ItemMenu
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          style={{
            color: hoveredItem === index ? "#000" : "",
            backgroundColor: hoveredItem === index ? "#999999" : ""
          }}
        >
          <div>
            {item}
          </div>
        </ItemMenu>
      ))}
    </SideMenuBar>
  );
};


SideBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideBar;
