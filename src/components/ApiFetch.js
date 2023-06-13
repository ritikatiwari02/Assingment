import React, { useEffect, useState } from "react";
import './Card.css'

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
function ExpandedCard({ record }) {
  const { gender, name, location, email, picture, nat } = record;

  return (
    <div className="expanded-card">
      <div className="expanded-card-content">
      <img className="card-image" src={picture.large} alt="Profile" />
        <h3 className="expanded-card-name">{name.first} {name.last}</h3>
        <p className="expanded-card-info">Gender: {gender}</p>
        <p className="expanded-card-info">Country: {location.country}</p>
        <p className="expanded-card-info">Email: {email}</p>
      </div>
    </div>
  );
}

function ApiFetch() {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
        );
        const data = await response.json();
        setRecords(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleCardSelect = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div className="container">
      <div className="empty-div">{selectedRecord && <ExpandedCard record={selectedRecord} />}
</div>
      <div className="card-container">
        {records.map((record, index) => (
          <Card key={index} record={record} onSelect={handleCardSelect} />
        ))}
      </div>
    </div>
  );
}

export default ApiFetch;
