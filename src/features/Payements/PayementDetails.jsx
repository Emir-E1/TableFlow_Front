import Input from "../../ui/Input";

function PayementDetails() {
  return (
    <div className="gap-4 flex flex-col text-white text-lg pb-6 border-b-2 border-base-dark-line">
      <div className="flex flex-col gap-1">
        {" "}
        <label>Cardholder Name</label>
        <Input />
        <label>Card Number</label>
        <Input />
      </div>
      <div className="flex gap-6 justify-center">
        <div>
          <label>Expiration Date</label>
          <Input />
        </div>
        <div>
          <label>Expiration Date</label>
          <Input />
        </div>
      </div>
    </div>
  );
}

export default PayementDetails;
