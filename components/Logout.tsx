"use client";

import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Logout = ({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Logic đăng xuất (ví dụ xóa token, session nếu có)
    // Sau khi đăng xuất, chuyển hướng đến trang login
    router.push("/login"); // Chuyển hướng tới trang đăng nhập
  };

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
      onClick={handleLogout}
    >
      <FaSignOutAlt className="text-white" />
      <span
        className={`text-white ${
          isSidebarCollapsed ? "hidden" : "block"
        } text-lg`}
      >
        Đăng xuất
      </span>
    </div>
  );
};

export default Logout;
