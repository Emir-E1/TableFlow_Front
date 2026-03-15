import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Logo from "../ui/Logo";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5 bg-base-dark-1">
      <Logo />
      <Input placeholder={"E-mail"} />
      <Input placeholder={"Password"} />
      <Button onClick={() => navigate("/app")}>Get Started</Button>
    </div>
  );
}

export default GetStarted;
