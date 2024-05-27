import "../../css/receiptcss/receipt.css";

const RpDetails = () => {
  return (
    <div className="rp-details flex-col">
      <ul>
        <li>Name:User Name</li>
        <li>Seat Number: Seat Number</li>
        <li>Destination: Destination</li>
        <li>Departure Time: Time</li>
        <li>Arrival Time: Time</li>
        <li>Amount Paid: KES: #</li>
        <li>Receipt Number: ########</li>
      </ul>
      <section className="flex">
        <button>Done</button>
      </section>
      <span>Have a nice travel</span>
    </div>
  );
};

export default RpDetails;
