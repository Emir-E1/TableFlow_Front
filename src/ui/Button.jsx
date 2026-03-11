function Button({ children, onClick, type = "primary" }) {
  const styles = {
    primary: "bg-primary text-white",
    secondary: "text-primary border-2 border-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`p-3 min-w-48 rounded-full shadow-md shadow-primary/40 ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
