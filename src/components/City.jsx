import React, { useState } from "react";

const City = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const data = {
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(data[state] || []);
  };

  return (
    <>  
     <h1 style={{ textAlign: "center", marginTop: "20px" }}>State & City Selector</h1>
     <div style={{ display: "flex", gap: "40px", marginTop: "50px", justifyContent: "center" }}>
   
      <div>
        <h3>Select State:</h3>
        <select onChange={handleStateChange} value={selectedState}>
          <option value="">-- Select State --</option>
          {Object.keys(data).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>


      <div>
        <h3>Available Cities:</h3>
        <select disabled={!selectedState}>
          <option value="">-- Select City --</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
    </>
 
  );
};

export default City;
