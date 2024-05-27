import React from 'react';
import './ReceiptComponent.css';

const ReceiptComponent = ({ details, onReset }) => {
  return (
    <div className="receipt">
      <h2>Payment Receipt</h2>
      <div className="receipt-details">
        <p><strong>Mode of Transport:</strong> {details.modeOfTransport}</p>
        <p><strong>Route:</strong> {details.route}</p>
        <p><strong>Pickup Point:</strong> {details.pickupPoint}</p>
        <p><strong>Destination:</strong> {details.destination}</p>
        <p><strong>Ticket Type:</strong> {details.ticketType}</p>
        <p><strong>Cost:</strong> ${details.cost.toFixed(2)}</p>
        <p><strong>Payment Method:</strong> {details.paymentMethod}</p>
      </div>
      <button className="reset-button" onClick={onReset}>Make Another Purchase</button>
    </div>
  );
};

export default ReceiptComponent;
