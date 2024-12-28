"use client";

import { FaCogs } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Settings = ({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
      onClick={() => navigateTo("/admin/settings")}
    >
      <FaCogs className="text-white" />
      <span
        className={`text-white ${
          isSidebarCollapsed ? "hidden" : "block"
        } text-lg`}
      >
        Cài đặt
      </span>
    </div>
  );
};

export default Settings;
