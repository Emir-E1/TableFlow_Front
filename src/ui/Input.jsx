function Input({ placeholder, Icon, width, height, className = "", ...props }) {
  return (
    <div className="relative text-white">
      {Icon && (
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          aria-hidden
        />
      )}
      <input
        placeholder={placeholder}
        style={{
          ...(width != null ? { width } : {}),
          ...(height != null ? { height } : {}),
        }}
        className={
          Icon
            ? `${width == null ? "w-full " : ""}pl-10 pr-4 py-3 bg-base-form rounded-lg outline-none ${className}`
            : `${width == null ? "w-full " : ""}px-4 py-3 bg-base-form rounded-lg outline-none ${className}`
        }
        {...props}
      />
    </div>
  );
}

export default Input;
