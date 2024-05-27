import "../../css/ticketingcss/ticketing.css";

const TpInputs = () => {
  return (
    <div className="tp-inputs flex-col">
      <div className="flex-col">
        <label>Number of Passengers</label>
        <input type="number" placeholder="Number of Passengers" />
      </div>
      <div className="flex-col">
        <label>Type of pass</label>
        <select>
          <option>Single Pass</option>
          <option>Daily Pass</option>
          <option>Monthly Pass</option>
        </select>
      </div>
    </div>
  );
};

export default TpInputs;
