// ManageList.jsx
import EditCard from "../../ui/EditCard";
import AddProduct from "./AddProduct";

function ManageList() {
  return (
    <section className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <AddProduct className={"row-span-2 "} />
        <EditCard className={"row-span-2 "} />
        <EditCard className={"row-span-2 "} />
        <EditCard className={"row-span-2 "} />
        <EditCard className={"row-span-2 "} />
      </div>
    </section>
  );
}

export default ManageList;
