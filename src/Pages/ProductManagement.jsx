import ManageFooter from "../features/ProductManage/ManageFooter";
import ManageHeader from "../features/ProductManage/ManageHeader";
import ManageList from "../features/ProductManage/ManageList";

function ProductManagement() {
  return (
    <div className="flex flex-col h-full ">
      <ManageHeader />
      <ManageList />
      <ManageFooter />
    </div>
  );
}

export default ProductManagement;
