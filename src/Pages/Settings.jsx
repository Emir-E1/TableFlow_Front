import SettingsNavBar from "../features/Settings/SettingsNavBar";
import { Outlet } from "react-router-dom";
import PageTitle from "../ui/PageTitle";

function Settings() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-5 p-6">
      <PageTitle title="Settings" />
      <div className="flex min-h-0 flex-1 justify-center gap-9">
        <SettingsNavBar />
        <div className="bg-base-dark-2 flex min-h-0 flex-1 rounded-2xl overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
