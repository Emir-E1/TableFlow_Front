import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SelectInput({ options = [], value, onChange, icon }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#251D2B] border-2 border-white/10 
          rounded-xl px-4 py-6 text-sm text-white min-w-[140px] hover:border-white/25 transition-all"
      >
        {icon && <span className="text-white">{icon}</span>}
        <span className="flex-1 text-left">{selected}</span>
      </button>

      {open && (
        <div
          className="absolute top-full mt-1 left-0 w-full bg-[#251D2B] border-2 
          border-white/10 rounded-xl overflow-hidden z-50"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-6 text-sm transition-all
                ${selected === option ? "text-white bg-white/5" : "text-white/60 hover:bg-white/5 hover:text-white/85"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectInput;

// Usage
// <SelectInput options={["Dine In", "To Go", "Delivery"]} icon={<Home size={14} />} onChange={(val) => console.log(val)} />
