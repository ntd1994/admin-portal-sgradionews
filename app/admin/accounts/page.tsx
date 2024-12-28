import React, { useState } from "react";
import { useRouter } from "next/router";

export default function AccountsPage() {
  const [role, setRole] = useState("user"); // Trạng thái lưu vai trò
  const router = useRouter();

  const handleUpdateClick = (id: number) => {
    // Khi click nút cập nhật, chuyển sang trang cập nhật tài khoản
    router.push(`/admin/accounts/update?id=${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-3xl">Quản lý Tài khoản</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Danh sách Tài khoản</h2>

          {/* Table to display accounts */}
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Tên</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Trạng thái</th>
                <th className="px-4 py-2 border-b">Vai trò</th>
                <th className="px-4 py-2 border-b">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample account data */}
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">Nguyễn Văn A</td>
                <td className="px-4 py-2 border-b">nguyenvana@example.com</td>
                <td className="px-4 py-2 border-b text-green-500">Hoạt động</td>
                <td className="px-4 py-2 border-b">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full sm:w-48"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleUpdateClick(1)}
                  >
                    Cập nhật
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">Trần Thị B</td>
                <td className="px-4 py-2 border-b">tranthib@example.com</td>
                <td className="px-4 py-2 border-b text-red-500">
                  Không hoạt động
                </td>
                <td className="px-4 py-2 border-b">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full sm:w-48"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleUpdateClick(2)}
                  >
                    Cập nhật
                  </button>
                </td>
              </tr>
              {/* Add more rows here as needed */}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Quản lý Tài khoản - Tất cả quyền lợi được bảo lưu.</p>
      </footer>
    </div>
  );
}
