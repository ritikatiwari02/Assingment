function Card({ record, onSelect }) {
  const { gender, name, location, email, picture, nat } = record;

  return (
    <div className="card" onClick={() => onSelect(record)}>
      <div className="card-content">
        <h3 className="card-name">{name.first} {name.last}</h3>
        <p className="card-info">{gender}, {location.country}</p>
        <p className="card-info">{email}</p>
      </div>
    </div>
  );
}

export default Card;

