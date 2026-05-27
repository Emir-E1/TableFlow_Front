import SegmentedControl from "../../ui/SegmentedControl";

function OrderHeader() {
  return (
    <div className="flex flex-col   gap-4">
      <h1 className="text-2xl font-semibold text-white">Order #20253</h1>
      <SegmentedControl options={["Dine In", "To Go", "Delivery"]} />
    </div>
  );
}

export default OrderHeader;
