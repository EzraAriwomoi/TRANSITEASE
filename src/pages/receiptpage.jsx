import RpDetails from "../components/receiptcomponents/RpDetails";
import "../css/receiptcss/receipt.css";

const receipt = () => {
  return (
    <div className="receipt-page flex-col">
      <RpDetails />
    </div>
  );
};

export default receipt;
