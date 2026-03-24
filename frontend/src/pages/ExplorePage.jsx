const restaurants = [
  {
    name: 'Urban Cafe',
    image: '/images/new-res.avif',
    address: 'Hyatt Regency, Sector 35, Chandigarh',
    cuisine: 'Chinese, Indian'
  },
  {
    name: 'Piccante',
    image: '/images/location2.jpeg',
    address: 'Sector 26, Chandigarh',
    cuisine: 'Italian, Chinese'
  },
  {
    name: 'The Cafe @ JW',
    image: '/images/location3.jpeg',
    address: 'JW Marriott Hotel, Sector 35, Chandigarh',
    cuisine: 'Indian, Cafe, International'
  },
  {
    name: 'Baluchi',
    image: '/images/location4.jpeg',
    address: 'Sector 26, Chandigarh',
    cuisine: 'Indian, Asian'
  },
  {
    name: 'Virgin Courtyard',
    image: '/images/location5.jpeg',
    address: 'Sector 7, Chandigarh',
    cuisine: 'Italian'
  },
  {
    name: 'Tamra',
    image: '/images/location6.jpeg',
    address: 'Sector 7, Chandigarh',
    cuisine: 'Multicuisine'
  }
];

function ExplorePage() {
  return (
    <>
      <hr />
      <div className="container-res">
        <h1>Different Restaurants</h1>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.name}>
              <img src={restaurant.image} alt={restaurant.name} loading="lazy" />
              <div className="restaurant-details">
                <h3>{restaurant.name}</h3>
                <p>Address: {restaurant.address}</p>
                <p>Cuisine: {restaurant.cuisine}</p>
                <a href="/reservations" className="reserve-btn">Reserve Now</a>
              </div>
            </div>
          ))}
        </div>

        <div className="dine-in-section">
          <p>Dine In at your favorite place or book a table</p>
          <a href="/reservations" className="dine-in-button">DINE IN</a>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
