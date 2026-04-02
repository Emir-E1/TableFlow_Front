function OrderHeader() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl text-white">Order #35624</h1>
      <div className="flex gap-3">
        <div className="font-semibold text-white p-4 w-fit rounded-2xl bg-primary">
          Dine In
        </div>{" "}
        <div className="font-semibold text-primary p-4 w-fit rounded-2xl border-2 border-primary">
          Dine In
        </div>
        <div className="font-semibold text-primary p-4 w-fit rounded-2xl border-2 border-primary">
          Dine In
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
