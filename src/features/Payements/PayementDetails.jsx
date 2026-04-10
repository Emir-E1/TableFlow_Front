import Input from "../../ui/Input";

function PayementDetails() {
  return (
    <div className="flex flex-col gap-4 border-b border-base-dark-line pb-6">
      <div className="flex flex-col gap-2">
        <label className="text-xl">Cardholder Name</label>
        <Input placeholder="Levi Ackerman" className="text-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl">Card Number</label>
        <Input placeholder="2564 1421 0897 1244" className="text-xl" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-xl">Expiration Date</label>
          <Input placeholder="02/2022" className="text-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl">CVV</label>
          <Input placeholder="•••" className="text-xl tracking-[0.3rem]" />
        </div>
      </div>
    </div>
  );
}

export default PayementDetails;
