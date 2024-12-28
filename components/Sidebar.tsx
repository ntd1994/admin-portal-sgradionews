"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AccountManagement from "./AccountManagement"; // Import component quản lý tài khoản
import MediaManagement from "./MediaManagement"; // Import component quản lý media
import Settings from "./Settings"; // Import component cài đặt
import Logout from "./Logout"; // Import component đăng xuất

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className={`${
        isSidebarCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 bg-gray-800 h-screen p-4 flex flex-col fixed top-0 left-0 z-50`} // Thêm thuộc tính fixed
    >
      {/* Sidebar Header with Admin Panel and Toggle Button */}
      <div className="flex items-center justify-between mb-6">
        <h1
          className={`text-white font-bold text-xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          Admin Panel
        </h1>

        <button className="text-white text-2xl" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Features */}
      <div className="space-y-4 flex-grow">
        {/* Quản lý tài khoản */}
        <AccountManagement isSidebarCollapsed={isSidebarCollapsed} />

        {/* Quản lý media */}
        <MediaManagement isSidebarCollapsed={isSidebarCollapsed} />

        {/* Cài đặt */}
        <Settings isSidebarCollapsed={isSidebarCollapsed} />

        {/* Đăng xuất */}
        <Logout isSidebarCollapsed={isSidebarCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
