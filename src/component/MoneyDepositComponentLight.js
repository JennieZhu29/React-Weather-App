import React from "react";
import "./css/MoneyDepositComponentLight.css";

const MoneyDepositComponentLight = () => {
  return (
    <div className="money-deposit-box">
      <button className="close-button">X</button>
      <div className="account-section">
        <div className="account-title">Account A</div>
        <div className="arrow">&#8594;</div>
        <div className="account-title">Account B</div>
      </div>
      <div className="amount-section">
        <div className="amount-title">Select amount</div>
        <div className="available-amount">Available 2 ATOM</div>
        <div className="input-container">
          <div className="input-icon">$</div>
          <input type="text" placeholder="Enter amount" />
          <div className="unit">ATOM = $1,013</div>
        </div>
        <span className="estimated-time">
          <i className="clock-icon">&#128336;</i>
          Estimated time: 20 minutes
        </span>
      </div>
      <div className="button-section">
        <button className="transfer-button">Transfer</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default MoneyDepositComponentLight;
