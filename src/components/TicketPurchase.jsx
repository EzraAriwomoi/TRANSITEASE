import React, { useState, useEffect } from 'react';
import './TicketPurchaseComponent.css';
import ReceiptComponent from './ReceiptComponent';

const TicketPurchaseComponent = () => {
  const [modeOfTransport, setModeOfTransport] = useState('');
  const [route, setRoute] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [cost, setCost] = useState(0);
  const [isPurchased, setIsPurchased] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [error, setError] = useState('');
  const [availableRoutes, setAvailableRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [pickupPoints, setPickupPoints] = useState([]);
  const [destinationPoints, setDestinationPoints] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [receiptDetails, setReceiptDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    creditCardNumber: '',
    cardHolder: '',
    expirationDate: '',
    securityCode: '',
    amount: 0
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/routes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched routes:', data);
        setAvailableRoutes(data);
      })
      .catch(error => console.error('Error fetching routes:', error));
  }, []);

  useEffect(() => {
    if (route && modeOfTransport) {
      fetch(`http://localhost:5000/api/pickup-points?route=${route}&mode=${modeOfTransport}`)
        .then(response => response.json())
        .then(data => setPickupPoints(data))
        .catch(error => console.error('Error fetching pickup points:', error));

      fetch(`http://localhost:5000/api/destination-points?route=${route}&mode=${modeOfTransport}`)
        .then(response => response.json())
        .then(data => setDestinationPoints(data))
        .catch(error => console.error('Error fetching destination points:', error));
    }
  }, [route, modeOfTransport]);

  const handleModeSelection = (selectedMode) => {
    setModeOfTransport(selectedMode);
    setRoute('');
    setPickupPoints([]);
    setDestinationPoints([]);
    setFilteredRoutes([]);
  };

  const handleRouteSelection = (selectedRoute) => {
    setRoute(selectedRoute);
    calculateCost(selectedRoute, ticketType);
  };

  const handleTicketTypeChange = (e) => {
    const type = e.target.value;
    setTicketType(type);
    calculateCost(route, type);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };

  const calculateCost = (selectedRoute, selectedType) => {
    let calculatedCost = 0;
    if (selectedRoute === 'Nairobi-Mombasa' && selectedType === 'single') {
      calculatedCost = 10;
    } else if (selectedRoute === 'Nairobi-Kisumu' && selectedType === 'daily') {
      calculatedCost = 20;
    } else if (selectedRoute === 'Nairobi-Kisumu' && selectedType === 'monthly') {
      calculatedCost = 100;
    }
    setCost(calculatedCost);
    setPaymentDetails({ ...paymentDetails, amount: calculatedCost });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    if (!route || !pickupPoint || !destination || !ticketType || !modeOfTransport) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setShowPaymentMethods(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }

    setError('');
    setLoading(true);

    const purchaseData = {
      modeOfTransport,
      route,
      pickupPoint,
      destination,
      ticketType,
      cost,
      paymentMethod,
      creditCardNumber: paymentDetails.creditCardNumber,
      cardHolder: paymentDetails.cardHolder,
      expirationDate: paymentDetails.expirationDate,
      securityCode: paymentDetails.securityCode
    };

    let paymentEndpoint = '';
    switch (paymentMethod) {
      case 'mpesa':
        paymentEndpoint = '/api/tickets/mpesa';
        break;
      case 'credit_card':
        paymentEndpoint = '/api/tickets/credit_card';
        break;
      case 'bank_transfer':
        paymentEndpoint = '/api/tickets/bank_transfer';
        break;
      case 'paypal':
        paymentEndpoint = '/api/tickets/paypal';
        break;
      default:
        setError('Invalid payment method selected.');
        setLoading(false);
        return;
    }

    fetch(`http://localhost:5000${paymentEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else if (paymentMethod === 'paypal' && data.approval_url) {
          window.location.href = data.approval_url;
        } else {
          setIsPurchased(true);
          setReceiptDetails(data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError('An error occurred during the purchase. Please try again.');
        console.error('Purchase error:', error);
      });
  };

  const resetState = () => {
    setModeOfTransport('');
    setRoute('');
    setPickupPoint('');
    setDestination('');
    setTicketType('');
    setCost(0);
    setIsPurchased(false);
    setShowPaymentMethods(false);
    setError('');
    setPickupPoints([]);
    setDestinationPoints([]);
    setPaymentMethod('');
    setReceiptDetails(null);
    setFilteredRoutes([]);
  };

  const handleViewRoutes = () => {
    console.log('Available routes:', availableRoutes);
    const filtered = availableRoutes.filter(routeItem =>
      routeItem.mode.toLowerCase() === modeOfTransport.toLowerCase()
    );
    console.log('Filtered routes:', filtered);
    setFilteredRoutes(filtered);
  };

  return (
    <div className="ticket-purchase">
      {receiptDetails ? (
        <ReceiptComponent details={receiptDetails} onReset={resetState} />
      ) : showPaymentMethods ? (
        <div className="payment-window">
          <h3>Select Payment Method</h3>
          <form className="payment-form" onSubmit={handlePayment}>
            <label>
              Payment Method:
              <select value={paymentMethod} onChange={handlePaymentMethodChange} required>
                <option value="">Select</option>
                <option value="mpesa">M-Pesa</option>
                <option value="credit_card">Credit Card</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="paypal">PayPal</option>
              </select>
            </label>
            {paymentMethod === 'credit_card' && (
              <>
                <label>
                  Credit Card Number:
                  <input
                    type="text"
                    name="creditCardNumber"
                    value={paymentDetails.creditCardNumber}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  Card Holder:
                  <input
                    type="text"
                    name="cardHolder"
                    value={paymentDetails.cardHolder}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  Expiration Date (YYYY-MM-DD):
                  <input
                    type="date"
                    name="expirationDate"
                    value={paymentDetails.expirationDate}
                    onChange={handlePaymentDetailsChange}
                    required
                  />
                </label>
                <label>
                  Security Code:
                  <input
                    type="text"
                    name="securityCode"
                    value={paymentDetails.securityCode}
                    onChange={handlePaymentDetailsChange}
                  />
                </label>
              </>
            )}
            <button type="submit" className="proceed-button" disabled={loading}>
              {loading ? 'Processing...' : 'Proceed'}
            </button>
          </form>
        </div>
      ) : (
        <form onSubmit={handlePurchase} className="ticket-form">
          {error && <div className="error-message">{error}</div>}
          <label>
            Mode of Transport:
            <select value={modeOfTransport} onChange={(e) => handleModeSelection(e.target.value)} required>
              <option value="">Select Mode</option>
              <option value="Bus">Bus</option>
              <option value="Train">Train</option>
              <option value="Tram">Tram</option>
            </select>
          </label>
          <label>
            Pickup Point:
            <input
              type="text"
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
              required
              placeholder="Enter pickup point"
            />
          </label>
          <label>
            Destination:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              placeholder="Enter destination"
            />
          </label>
          <button type="button" className="view-routes-button" onClick={handleViewRoutes}>
            View Available Routes
          </button>
          <div className="available-routes">
            {filteredRoutes.length > 0 ? (
              <ul>
                {filteredRoutes.map((routeItem, index) => (
                  <li
                    key={index}
                    onClick={() => handleRouteSelection(routeItem.route)}
                    className={route === routeItem.route ? 'selected' : ''}
                  >
                    {routeItem.route}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available routes for the selected mode.</p>
            )}
          </div>
          <label>
            Ticket Type:
            <select value={ticketType} onChange={handleTicketTypeChange} required>
              <option value="">Select</option>
              <option value="single">Single Ride</option>
              <option value="daily">Daily Pass</option>
              <option value="monthly">Monthly Pass</option>
            </select>
          </label>
          {ticketType && route && <p className="cost-display">Cost: ${cost.toFixed(2)}</p>}
          <button type="submit" className="purchase-button" disabled={loading}>
            {loading ? 'Processing...' : 'Purchase'}
          </button>
        </form>
      )}
    </div>
  );
};

export default TicketPurchaseComponent;
