import React, { useState } from 'react';
import { TabsContainer, TabList, TabItem, TabContent } from './recommendations.style';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('hotelDestinations');

  return (
    <TabsContainer>
      <h2>Travelling.com Recommendations</h2>
      <TabList>
        <TabItem isActive={activeTab === 'hotelDestinations'} onClick={() => setActiveTab('hotelDestinations')}>
          Featured Hotel Destinations
        </TabItem>
        <TabItem isActive={activeTab === 'flightDestinations'} onClick={() => setActiveTab('flightDestinations')}>
          Featured Flight Destinations
        </TabItem>
        <TabItem isActive={activeTab === 'guides'} onClick={() => setActiveTab('guides')}>
          Featured Guides
        </TabItem>
        <TabItem isActive={activeTab === 'TravellingBest'} onClick={() => setActiveTab('TravellingBest')}>
          Travelling.Best
        </TabItem>
        <TabItem isActive={activeTab === 'attractions'} onClick={() => setActiveTab('attractions')}>
          Popular Attractions
        </TabItem>
        <TabItem isActive={activeTab === 'links'} onClick={() => setActiveTab('links')}>
          Travelling.com Links
        </TabItem>
      </TabList>

      <TabContent>
        {activeTab === 'hotelDestinations' && (
          <div>
            <a>Hotels in Da Lat</a>
            <a>Hotels in Ho Chi Minh City</a>
            <a>Hotels in Ha Noi</a>
            <a>Hotels in Hue</a>
            <a>Hotels in Bien Hoa</a>
            <a>Hotels in Da Nang</a>
            <a>Hotels in Phan Thiet</a>
            <a>Hotels in Nha Trang</a>
          </div>
        )}
        {activeTab === 'flightDestinations' && <div>Flight Destinations Content...</div>}
        {activeTab === 'guides' && <div>Guides Content...</div>}
        {activeTab === 'TravellingBest' && <div>Travelling.Best Content...</div>}
        {activeTab === 'attractions' && <div>Popular Attractions Content...</div>}
        {activeTab === 'links' && <div>Travelling.com Links Content...</div>}
      </TabContent>
    </TabsContainer>
  );
};

export default Recommendations;
