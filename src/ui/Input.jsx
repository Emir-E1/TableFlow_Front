function Input({ placeholder, Icon }) {
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
        className={
          Icon
            ? "w-full pl-10 pr-4 py-3 bg-base-form rounded-lg outline-none"
            : " px-4 py-3 bg-base-form rounded-lg outline-none"
        }
      />
    </div>
  );
}

export default Input;
