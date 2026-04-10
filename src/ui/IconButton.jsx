function IconButton({
  icon,
  variant = "default",
  onClick,
  size = "md",
  children,
}) {
  const sizes = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-14 h-14" };

  const variants = {
    default: "border-white/10 hover:border-white/25 hover:bg-white/5",
    danger:
      " border-primary  text-primary hover:text-white hover:bg-primary    ",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl border-2 bg-base-dark-1 
           transition-all duration-150 gap-2 ${sizes[size]} ${variants[variant]}`}
    >
      <span className="w-5 h-5 ">
        {icon} {children}{" "}
      </span>
    </button>
  );
}

export default IconButton;

// Usage
// <IconButton icon={<Trash size={18} />} variant="danger" onClick={() => {}} />
