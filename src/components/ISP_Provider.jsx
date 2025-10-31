import React, { useState } from "react";

const ISP_Provider = () => {
  const [selectedOperator, setSelectedOperator] = useState("");
  const [plans, setPlans] = useState([]);

  const rechargeData = {
    Jio: [
      "₹149 - 1GB/day for 20 days",
      "₹239 - 1.5GB/day for 28 days",
      "₹666 - 1.5GB/day for 84 days",
      "₹719 - 2GB/day for 84 days",
    ],
    Airtel: [
      "₹179 - 2GB total for 24 days",
      "₹265 - 1GB/day for 28 days",
      "₹455 - 6GB total for 84 days",
      "₹719 - 1.5GB/day for 84 days",
    ],
    BSNL: [
      "₹147 - 10GB total for 30 days",
      "₹247 - 3GB/day for 30 days",
      "₹429 - 1GB/day for 81 days",
      "₹666 - 1.5GB/day for 134 days",
    ],
  };

  const handleOperatorChange = (e) => {
    const operator = e.target.value;
    setSelectedOperator(operator);
    setPlans(rechargeData[operator] || []);
  };

  return (
    <>
     <h1 style={{ textAlign: "center", marginTop: "20px" }}>Special Offer For Diwali. Get Recharge(Offer Limited Only 20 NOV)</h1>
    <div
      style={{
        display: "flex",
        gap: "40px",
        marginTop: "50px",
        justifyContent: "center",
      }}
    >
 
      <div>
        <h3>Select Operator:</h3>
        <select onChange={handleOperatorChange} value={selectedOperator}>
          <option value="">-- Select Operator --</option>
          {Object.keys(rechargeData).map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3>Available Plans:</h3>
        <select disabled={!selectedOperator}>
          <option value="">-- Select Plan --</option>
          {plans.map((plan, index) => (
            <option key={index} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>
    </div>
    </>
  );
};

export default ISP_Provider;
