import { useState } from "react";

function SegmentedControl({ options = [], defaultValue, onChange }) {
  const [active, setActive] = useState(defaultValue ?? options[0]);

  const handleClick = (option) => {
    setActive(option);
    onChange?.(option);
  };

  return (
    <div className="flex rounded-xl   gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`px-5 py-3 rounded-lg bg-base-dark-1 text-sm font-medium transition-all duration-150
            ${
              active === option
                ? "bg-primary text-white"
                : "text-primary hover:text-white/75"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;
