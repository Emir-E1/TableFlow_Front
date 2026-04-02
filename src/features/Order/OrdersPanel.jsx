import OrderBill from "./OrderBill";
import OrderForm from "./OrderForm";
import OrderHeader from "./OrderHeader";

// OrdersPanel.jsx — reçoit onPay pour déclencher le portal
function OrdersPanel({ onPay }) {
 
  return (
    <div className="flex h-full min-h-0 flex-col p-6 gap-6">
      <OrderHeader />
      <OrderForm />
      <OrderBill onPay={onPay} />
    </div>
  );
}

export default OrdersPanel;
