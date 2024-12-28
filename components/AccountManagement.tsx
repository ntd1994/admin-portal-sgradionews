"use client"; // Đánh dấu đây là client-side component

import { useState } from "react";
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Dùng useRouter từ next/navigation thay vì next/router

const AccountManagement = ({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean;
}) => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const router = useRouter(); // Lấy router từ next/navigation

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  // Chuyển hướng sang các trang khác
  const navigateTo = (path: string) => {
    router.push(path); // Sử dụng router.push từ next/navigation
  };

  return (
    <div>
      <div
        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
        onClick={toggleAccountDropdown}
      >
        <FaUser className="text-white" />
        <span
          className={`text-white ${
            isSidebarCollapsed ? "hidden" : "block"
          } text-lg`}
        >
          Quản lý tài khoản
        </span>
        {!isSidebarCollapsed &&
          (isAccountDropdownOpen ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          ))}
      </div>

      {!isSidebarCollapsed && isAccountDropdownOpen && (
        <div className="ml-6 mt-2 space-y-2">
          {/* Sub-feature 1 */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
            onClick={() => navigateTo("/admin/accounts/create")}
          >
            <span className="text-white text-sm">Tạo tài khoản</span>
          </div>

          {/* Sub-feature 2 */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
            onClick={() => navigateTo("/admin/accounts/update")}
          >
            <span className="text-white text-sm">Cập nhật thông tin</span>
          </div>

          {/* Sub-feature 3 */}
          <div
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
            onClick={() => navigateTo("/admin/accounts/manage")}
          >
            <span className="text-white text-sm">Quản lý tài khoản</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
