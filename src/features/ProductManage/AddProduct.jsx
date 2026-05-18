import { PencilIcon, PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
function AddProduct({ className }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`${className} rounded-2xl border-4 border-primary border-dashed flex justify-center items-center hover:bg-primary/30 cursor-pointer`}
          onClick={() => console.log("Add_Plate")}
        >
          <div className="flex flex-col justify-center items-center gap-6">
            <PlusIcon color="#ea7c69 " size={32} />
            <h2 className="text-primary font-semibold text-xl">
              Add New Plate
            </h2>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddProduct;
