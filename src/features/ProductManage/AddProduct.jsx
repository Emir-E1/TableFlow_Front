import { PencilIcon, PlusIcon } from "lucide-react";

function AddProduct({ className }) {
  return (
    <div
      className={`${className} rounded-2xl border-4 border-primary border-dashed  flex justify-center items-center hover:bg-primary/30 cursor-pointer`}
      onClick={() => console.log("Add_Plate")}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <PlusIcon color="#ea7c69 " size={32} />
        <h2 className="text-primary font-semibold text-xl ">Add New Plate</h2>
      </div>
    </div>
  );
}

export default AddProduct;
