import { useState } from "react";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { menuDishes, menuImageOptions } from "@/data/menuDishes";
import Input from "../../ui/Input";
import ShadeIconBtn from "../../ui/ShadeIconBtn";
import { cn } from "@/lib/utils";

const exampleDish = menuDishes[1];

const emptyForm = () => ({
  image: menuImageOptions[0].src,
  description: "",
  price: "",
  quantity: "",
});

function AddProduct({ className }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const resetForm = () => setForm(emptyForm());

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (!nextOpen) resetForm();
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dish = {
      image: form.image,
      description: form.description.trim(),
      price: Number.parseFloat(form.price) || 0,
      quantity: Number.parseInt(form.quantity, 10) || 0,
    };
    // Mock submit: keep local-only behavior for portfolio demo.
    void dish;
    setOpen(false);
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-2xl border-4 border-dashed border-primary transition-colors hover:bg-primary/30",
            className
          )}
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <PlusIcon className="text-primary" size={32} />
            <h2 className="text-xl font-semibold text-primary">
              Add New Dish
            </h2>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-xl gap-0 overflow-hidden border-base-dark-line bg-base-dark-2 p-0 text-white sm:rounded-2xl">
        <DialogHeader className="space-y-1 border-b border-base-dark-line px-6 py-5 text-left">
          <DialogTitle className="text-2xl font-semibold text-white">
            Add New Dish
          </DialogTitle>
          <DialogDescription className="text-sm text-text-light">
            Portfolio mock: fill in dish details like your menu cards.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-6 py-6">
          <fieldset className="flex flex-col gap-3">
            <span className="text-sm font-medium text-text-gray">
              Dish Image
            </span>
            <div className="flex justify-around pb-1">
              {menuImageOptions.map(({ name, src }) => {
                const isSelected = form.image === src;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, image: src }))}
                    className={cn(
                      "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-base-form transition-colors",
                      isSelected
                        ? "border-primary ring-2 ring-primary/40"
                        : "border-base-dark-line hover:border-primary/50"
                    )}
                  >
                    <img
                      src={src}
                      alt={name}
                      className="h-full w-full object-contain p-1"
                    />
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="dish-name"
              className="text-sm font-medium text-text-gray"
            >
              Dish Name
            </label>
            <Input
              id="dish-name"
              value={form.description}
              onChange={handleChange("description")}
              placeholder={exampleDish.description}
              className="w-full text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dish-price"
                className="text-sm font-medium text-text-gray"
              >
                Price ($)
              </label>
              <Input
                id="dish-price"
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={handleChange("price")}
                placeholder={String(exampleDish.price)}
                className="w-full text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="dish-quantity"
                className="text-sm font-medium text-text-gray"
              >
                Available
              </label>
              <Input
                id="dish-quantity"
                type="number"
                min="0"
                step="1"
                value={form.quantity}
                onChange={handleChange("quantity")}
                placeholder={String(exampleDish.quantity)}
                className="w-full text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-base-dark-line bg-base-dark-1/80 p-4">
            <img
              src={form.image}
              alt="Preview"
              className="h-16 w-16 shrink-0 object-contain"
            />
            <div className="min-w-0 text-sm">
              <p className="truncate font-semibold text-white">
                {form.description || exampleDish.description}
              </p>
              <p className="text-primary">
                ${form.price || exampleDish.price} ·{" "}
                {form.quantity || exampleDish.quantity} Available
              </p>
            </div>
          </div>

          <DialogFooter className="gap-3 sm:justify-stretch">
            <DialogClose asChild>
              <ShadeIconBtn
                label="Cancel"
                type="secondary"
                size="full"
                className="min-w-0"
              />
            </DialogClose>
            <ShadeIconBtn
              label="Add Dish"
              variant="primary"
              size="full"
              className="min-w-0"
              type="submit"
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddProduct;
