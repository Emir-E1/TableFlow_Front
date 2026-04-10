import ManageFooter from "../features/ProductManage/ManageFooter";
import ManageHeader from "../features/ProductManage/ManageHeader";
import ManageList from "../features/ProductManage/ManageList";

function ProductManagement() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <ManageHeader />
      <ManageList />
      <ManageFooter />
    </div>
  );
}

export default ProductManagement;
