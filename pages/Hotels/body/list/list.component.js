import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './list.styled';
import Title from './title/title.component';
import Item from './item/item.component';
import { ListItem } from './list.styled';
import SideBar from './side-bar/side-bar.component';
import { NavLink} from 'react-router-dom';
import { fetchHotels } from '../../../../redux/hotel/hotels.slice';
import { fetchLocations } from '../../../../redux/hotel/location.slice';
import FilterBox from './filter-box/filter-box.component';
import { removeVietnameseTones } from './filter-box/removeTones';
import AdsBanner from './ads-banner/ads-banner.component';
import Recommendations from './recommendations/recommendation.component';

const Body = () => {
  const dispatch = useDispatch();
  const { loading: hotelsLoading, list: hotelsList, error: hotelsError } = useSelector(state => state.hotels);
  const { loading: locationsLoading, list: locationsList, error: locationsError } = useSelector(state => state.locations);

  const [searchParams, setSearchParams] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guests: { adults: 1, children: 0, infants: 0 }
  });
  const [filteredHotels, setFilteredHotels] = useState({
    fiveStars: [],
    budgetFriendly: [],
    trending: []
  });
  const [filteredLocations, setFilteredLocations] = useState({
    fiveStars: [],
    budgetFriendly: [],
    trending: []
  });
  const [selectedFiveStarsItem, setSelectedFiveStarsItem] = useState(null); 
  const [selectedBudgetFriendlyItem, setSelectedBudgetFriendlyItem] = useState(null);
  const [selectedTrendingItem, setSelectedTrendingItem] = useState(null);

  useEffect(() => {
    dispatch(fetchHotels());
    dispatch(fetchLocations());
  }, [dispatch]);

  useEffect(() => {
    const { location } = searchParams;
    const normalizedLocation = removeVietnameseTones(location).toLowerCase();

    // Remove Vietnamese tones and convert address to lowercase
    const removeTonesAddress = hotelsList.map(hotel => {
      return {
        ...hotel,
        address: removeVietnameseTones(hotel.address).toLowerCase()
      };
    });

    // Filter hotels by tag and location
    const filteredFiveStarsHotels = removeTonesAddress.filter(hotel => hotel.tag?.includes('5-star') && (!normalizedLocation || hotel.address.includes(normalizedLocation)));
    const filteredBudgetFriendlyHotels = removeTonesAddress.filter(hotel => hotel.tag?.includes('Budget-friendly') && (!normalizedLocation || hotel.address.includes(normalizedLocation)));
    const filteredTrendingHotels = removeTonesAddress.filter(hotel => hotel.tag?.includes('Trending') && (!normalizedLocation || hotel.address.includes(normalizedLocation)));

    setFilteredHotels({
      fiveStars: filteredFiveStarsHotels,
      budgetFriendly: filteredBudgetFriendlyHotels,
      trending: filteredTrendingHotels
    });
  }, [hotelsList, searchParams]);

  useEffect(() => {
    // Filter locations by tags
    const fiveStarsLocations = locationsList.filter(location => location.tag?.includes('5-star'));
    const budgetFriendlyLocations = locationsList.filter(location => location.tag?.includes('Budget-friendly'));
    const trendingLocations = locationsList.filter(location => location.tag?.includes('Trending'));

    setFilteredLocations({
      fiveStars: fiveStarsLocations,
      budgetFriendly: budgetFriendlyLocations,
      trending: trendingLocations
    });
  }, [locationsList]);

  const handleSearch = (params) => {
    setSearchParams(params);
    const normalizedLocation = removeVietnameseTones(params.location).toLowerCase();
    const foundFiveStarsIndex = filteredLocations.fiveStars.findIndex(location => removeVietnameseTones(location.address).toLowerCase() === normalizedLocation);
    const foundTrendingIndex = filteredLocations.trending.findIndex(location => removeVietnameseTones(location.address).toLowerCase() === normalizedLocation);
    const foundBudgetFriendlyIndex = filteredLocations.budgetFriendly.findIndex(location => removeVietnameseTones(location.address).toLowerCase() === normalizedLocation);
    
    if (foundFiveStarsIndex !== -1 && foundTrendingIndex !== -1 && foundBudgetFriendlyIndex !== -1) {
      setSelectedFiveStarsItem(foundFiveStarsIndex); 
      setSelectedBudgetFriendlyItem(foundTrendingIndex);
      setSelectedTrendingItem(foundBudgetFriendlyIndex);
    } else {
      setSelectedFiveStarsItem(null); 
      setSelectedBudgetFriendlyItem(null);
      setSelectedTrendingItem(null);
    }
  };

  if (hotelsLoading || locationsLoading) {
    return <div>Loading...</div>;
  }

  if (hotelsError) {
    return <div>Error: {hotelsError}</div>;
  }

  if (locationsError) {
    return <div>Error: {locationsError}</div>;
  }

  const uniqueLocations = (locations) => [...new Set(locations.map(location => location.address))];

  return (
    <div>
      <FilterBox onSearch={handleSearch} />
      <AdsBanner />
      <List>
        <div>
          <Title value='Top Picks of Luxurious 5-star Hotels' />
          <SideBar
            items={uniqueLocations(filteredLocations.fiveStars)}
            onItemClick={(item) => handleSearch({ ...searchParams, location: item })}
            selectedItem={selectedFiveStarsItem} // Pass selected item for 5-star hotels
          />
          <ListItem>
            {filteredHotels.fiveStars.map((hotel, index) => (
              <NavLink to={`/Hotels/detail/${hotel.id}`} key={hotel.id}>
                <Item
                  key={`fiveStars-${index}`}
                  name={hotel.name}
                  price={`${hotel.price}$`}
                  rate={hotel.rate}
                  img={hotel.img}
                  review={hotel.reviews}
                />
              </NavLink>
            ))}
          </ListItem>
        </div>
        <div>
          <Title value='Budget-friendly Hotels Worldwide' />
          <SideBar
            items={uniqueLocations(filteredLocations.budgetFriendly)}
            onItemClick={(item) => handleSearch({ ...searchParams, location: item })}
            selectedItem={selectedBudgetFriendlyItem}
          />
          <ListItem>
            {filteredHotels.budgetFriendly.map((hotel, index) => (
              <NavLink to={`/Hotels/detail/${hotel.id}`} key={hotel.id}>
                <Item
                  key={`budgetFriendly-${index}`}
                  name={hotel.name}
                  price={`${hotel.price}$`}
                  rate={hotel.rate}
                  img={hotel.img}
                  review={hotel.reviews}
                />
              </NavLink>
            ))}
          </ListItem>
        </div>
        <div>
          <Title value='Trending Guest Houses Worldwide' />
          <SideBar
            items={uniqueLocations(filteredLocations.trending)}
            onItemClick={(item) => handleSearch({ ...searchParams, location: item })}
            selectedItem={selectedTrendingItem}
          />
          <ListItem>
            {filteredHotels.trending.map((hotel, index) => (
              <NavLink to={`/Hotels/detail/${hotel.id}`} key={hotel.id}>
                <Item
                  key={`trending-${index}`}
                  name={hotel.name}
                  price={`${hotel.price}$`}
                  rate={hotel.rate}
                  img={hotel.img}
                  review={hotel.reviews}
                />
              </NavLink>
            ))}
          </ListItem>
        </div>
      </List>
      <Recommendations />
    </div>
  );
};

export default Body;
