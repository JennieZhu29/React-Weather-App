import React from "react";
import "./css/MoneyDepositComponent.css";

const MoneyDepositComponent = () => {
  return (
    <div className="money-deposit-container">
      <div className="close-button">&#10006;</div>
      <div className="account-section">
        <div className="account-title">Account A</div>
        <div className="arrow">&#8594;</div>
        <div className="account-title">Account B</div>
      </div>
      <div className="amount-section">
        <div className="select-amount">Select amount</div>
        <div className="available-balance">Available 2 ATOM</div>
        <div className="input-box">
          <div className="icon">&#36;</div>
          <input type="text" placeholder="Enter amount" />
          <div className="unit">Atom = $1,013</div>
        </div>
        <div className="estimated-time">
          <span className="clock-icon">&#128336;</span>
          Estimated time: 20 minutes
        </div>
      </div>
      <div className="button-section">
        <button className="transfer-button">Transfer</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default MoneyDepositComponent;
