// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import "../../css/ticketingcss/ticketing.css";
import 'intasend-inlinejs-sdk';

const TpGotoPay = () => {
  useEffect(() => {
    new window.IntaSend({
      publicAPIKey: "ISPubKey_test_f776b131-c148-4734-81ef-fed227f72018",
      live: false // set to true for live environment
    })
    .on("COMPLETE", (response) => { console.log("COMPLETE:", response); })
    .on("FAILED", (response) => { console.log("FAILED:", response); })
    .on("IN-PROGRESS", () => { console.log("INPROGRESS ..."); });
  }, []);

  async function handlePay() {
    const mpesaNumber = prompt("Enter Mpesa Number");
    if (mpesaNumber) {
      try {
        const response = await fetch('http://localhost:5000/create-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: 900,
            currency: 'KES',
            phone_number: mpesaNumber
          })
        });

        const result = await response.json();
        console.log(result); // Log the server response for debugging

        if (result.success) {
          document.querySelector('.intaSendPayButton').click();
        } else {
          console.error('Payment request failed:', result.message);
        }
      } catch (error) {
        console.error('Error making payment request:', error);
      }
    }
  }

  return (
    <div className="tp-goto-pay flex-col">
      <section className="flex-col">
        <span>Number of Seats selected: 3</span>
        <span>Price of one seat: KSH 300</span>
        <span>
          TOTAL PRICE: <em>KSH 900</em>
        </span>
      </section>
      <button onClick={handlePay}>Goto Pay</button>
      <button className="intaSendPayButton" data-amount="900" data-currency="KES" style={{ display: 'none' }}>Pay Now</button>
    </div>
  );
};

export default TpGotoPay;
