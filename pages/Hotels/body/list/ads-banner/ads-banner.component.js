import React from 'react';
import Slider from 'react-slick';
import {
  BigAdItem,
  SmallAdItem,
  AdsContainer,
  Container,
  FirstImg,
  OthersImg,
} from './ads-banner.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdsBanner = () => {

  const settings = {
    dots: true,              
    infinite: true,          
    speed: 500,              
    slidesToShow: 1,         
    slidesToScroll: 1,       
    autoplay: true,          
    autoplaySpeed: 2000,     
    pauseOnHover: true,      
  };
  

  return (
    <AdsContainer>
      <BigAdItem>
        <img
          src="https://dimg04.tripcdn.com/images/0a12e12000f206t1069B5.png"
          alt="AirAsia Specials"
        />
      </BigAdItem>
      <SmallAdItem>
        <Container>
          <Slider {...settings}>
            <div>
              <OthersImg
                  src="https://dimg04.tripcdn.com/images/0a12412000f1dlbvl0238.jpg"
                  alt="Image 1"
                />
            </div>
            <div>
              <OthersImg
                  src="https://dimg04.tripcdn.com/images/0a15312000cn6bsx9E6AF.jpg"
                  alt="Image 2"
                />     
            </div>
            <div>
              <OthersImg
                  src="https://dimg04.tripcdn.com/images/0a12412000f4uti6l2810.jpg"
                  alt="Image 3"
                />
            </div>
            <div>
              <OthersImg
                  src="https://ak-d.tripcdn.com/images/0a14s12000db4v2fcA245.jpg"
                  alt="Image 4"
                />
            </div>
            <div>
              <OthersImg
                  src="https://dimg04.tripcdn.com/images/0a13f12000e4fkb16A303.jpg"
                  alt="Super Johor Hot Deals"
                />  
            </div>
          </Slider>
        </Container>
      </SmallAdItem>
    </AdsContainer>
  );
};

export default AdsBanner;
