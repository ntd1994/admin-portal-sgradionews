"use client";

import { FaMusic, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MediaManagement = ({
  isSidebarCollapsed,
}: {
  isSidebarCollapsed: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false); // State để theo dõi dropdown
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Đảo ngược trạng thái dropdown
  };

  return (
    <div>
      <div
        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-all"
        onClick={toggleDropdown} // Thêm toggleDropdown khi click vào MediaManagement
      >
        <FaMusic className="text-white" />
        <span
          className={`text-white ${
            isSidebarCollapsed ? "hidden" : "block"
          } text-lg`}
        >
          Quản lý media
        </span>
        <FaChevronDown
          className={`text-white ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />{" "}
        {/* Thêm icon down arrow */}
      </div>

      {/* Dropdown menu */}
      {isOpen && !isSidebarCollapsed && (
        <div className="ml-6 mt-2 space-y-2">
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-600 p-2 rounded-md"
            onClick={() => navigateTo("/admin/media/upload")}
          >
            <span className="text-white text-sm">Upload Audio</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-600 p-2 rounded-md"
            onClick={() => navigateTo("/admin/media/manage")}
          >
            <span className="text-white text-sm">Quản lý Audio</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaManagement;
