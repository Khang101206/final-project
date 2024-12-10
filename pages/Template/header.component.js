import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BoxTabs, Title, ItemMenu, Title_Searchbox, SideMenuBar, Top, SearchBox, SignInButton, SignInText } from "./header.style";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredItem(index);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <BoxTabs>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
      </style>
      <Top>
        <Title_Searchbox>
          <Title>Travelling.com</Title>
          <SearchBox type="text" placeholder="Search.." />
        </Title_Searchbox>
        <SignInButton>
          <SignInText><NavLink to={`/Hotels/SignIn`} >Sign in</NavLink></SignInText>
        </SignInButton>
      </Top>
      <SideMenuBar>
        {["Home", "Flights", "Trains", "Hotels", "Attractions and tours"].map((item, index) => (
          <NavLink to={`/${item}`} key={item}>
            <ItemMenu
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              style={{
                color: hoveredItem === index ? "black" : ""
              }}
            >
              {item}
            </ItemMenu>
          </NavLink>
        ))}
      </SideMenuBar>
    </BoxTabs>
  );
};

export default Header;
