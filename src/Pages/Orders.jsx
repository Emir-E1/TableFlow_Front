// Orders.jsx — version propre, URL = l'état
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import OrdersPanel from "../features/Order/OrdersPanel";
import PaymentPanel from "../features/Payments/PaymentPanel";

function Orders() {
  const navigate = useNavigate();
  const location = useLocation();

  // plus de useState — l'URL décide
  const paymentOpen = location.pathname.includes("/payments");
  const ordersPath = location.pathname.replace(/\/payments\/?$/, "");

  return (
    <>
      <div className="h-full flex flex-col bg-base-dark-2">
        <OrdersPanel onPay={() => navigate("payments")} />
      </div>

      {paymentOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex">
            <div
              className="h-full bg-black/50 backdrop-blur-sm w-[40%]"
              onClick={() => navigate(ordersPath, { replace: true })}
            />
            <div className="flex flex-1 h-full">
              <div className="w-[45%] h-full bg-base-dark-2 overflow-y-auto">
                <OrdersPanel onPay={() => {}} />
              </div>
              <div className="flex-1 h-full bg-base-dark-2">
                <PaymentPanel
                  onClose={() => navigate(ordersPath, { replace: true })}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Orders;
