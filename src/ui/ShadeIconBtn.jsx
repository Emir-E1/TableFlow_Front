import { Button } from "../components/ui/button";
function ShadeIconBtn({ label, onClick, Icon, type, size }) {
  return (
    <Button
      variant={type}
      className="flex items-center justify-center gap-2"
      onClick={onClick}
      size={size}
    >
      {Icon}
      {label}
    </Button>
  );
}

export default ShadeIconBtn;
