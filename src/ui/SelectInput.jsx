import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ShadeIconBtn from "./ShadeIconBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function SelectInput({ options = [], value, onChange, icon }) {
  const [selected, setSelected] = useState(value ?? options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShadeIconBtn label={selected} Icon={icon} type="select" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-purplish border-white/10">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => handleSelect(option)}
            className={`cursor-pointer text-sm ${
              selected === option ? "bg-white/10 text-white" : "text-white/60"
            }`}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SelectInput;
