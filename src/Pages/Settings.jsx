import SettingsNavBar from "../features/Settings/SettingsNavBar";
import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-1 justify-center p-6 gap-9">
      <SettingsNavBar />
      <div className="bg-base-dark-2 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
