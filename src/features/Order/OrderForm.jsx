import OrderRow from "./OrderRow";
function OrderForm() {
  return (
    <div className="flex flex-1 min-h-0 flex-col gap-6 overflow-y-auto">
      <div className="flex justify-between text-white font-semibold text-xl border-b-2 p-6 border-b-base-dark-line">
        <span>Item</span>
        <div className="flex gap-4">
          <span>Qty</span>
          <span>Price</span>
        </div>
      </div>

      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
      <OrderRow />
    </div>
  );
}
export default OrderForm;
