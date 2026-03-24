function RestaurantCard({ restaurant }) {
  return (
    <article className="card">
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <span className="tag">{restaurant.cuisine}</span>
    </article>
  );
}

export default RestaurantCard;
