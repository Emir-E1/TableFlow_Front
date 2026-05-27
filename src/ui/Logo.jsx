import logo from "../assets/Logo.svg";

function Logo({ className = "h-16 w-16" }) {
  return <img src={logo} alt="TableFlow" className={className} />;
}

export default Logo;
