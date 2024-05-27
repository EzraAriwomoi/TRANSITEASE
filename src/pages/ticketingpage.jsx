import TpDetails from "../components/ticketingcomponents/TpDetails";
import TpGotoPay from "../components/ticketingcomponents/TpGotoPay";
import TpInputs from "../components/ticketingcomponents/TpInputs";
import TpSeats from "../components/ticketingcomponents/TpSeats";
import "../css/ticketingcss/ticketing.css";

const ticketingpage = () => {
  return (
    <div className="ticketing-page flex-col">
      <TpDetails />
      <TpInputs />
      <TpGotoPay />
    </div>
  );
};

export default ticketingpage;
