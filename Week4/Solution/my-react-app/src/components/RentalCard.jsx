let props = {
  name: "Cozy Cabin",
  price: 120,
  location: "Seattle, WA",
  img: "https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const RentalCard = () => {
  return (
    <div className="rental-card">
      <h2>{props.name}</h2>
      <p>${props.price}</p>
      <p>{props.location}</p>
      <img src={props.img} alt={props.name}></img>
    </div>
  );
};

export default RentalCard;
