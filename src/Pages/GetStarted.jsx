import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Logo from "../ui/Logo";
import ShadeIconBtn from "../ui/ShadeIconBtn";

const HERO_IMAGE = `${import.meta.env.BASE_URL}Shot%201.png`;

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
      <img
        src={HERO_IMAGE}
        className="
      absolute inset-0
      h-full w-full
      object-cover
      blur-lg
      opacity-30
    "
      />

      <div className="flex flex-col gap-8 rounded-3xl  bg-base-dark-2/90 p-10 shadow-2xl  backdrop-blur-md">
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo className="h-20 w-20" />
          <div className="mt-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              TableFlow
            </h1>
            <p className="text-sm leading-relaxed text-text-light">
              Portfolio prototype restaurant POS admin UI.{" "}
              <strong>Desktop layout only</strong>
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-5">
          <Input placeholder="E-mail" type="email" autoComplete="email" />
          <Input
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
          <ShadeIconBtn
            label={"Enter Demo"}
            type={"primary"}
            onClick={() => navigate("/app")}
            size={"lg"}
          />
        </div>

        <p className="text-center text-xs text-primary">
          No account required click to explore the interface.
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
