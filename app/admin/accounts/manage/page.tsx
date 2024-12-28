"use client"; // Đảm bảo component này chỉ chạy ở phía client

import { useState, useEffect } from "react";
import Link from "next/link";

const ManageAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, username: "admin", email: "admin@example.com", role: "admin" },
    { id: 2, username: "user1", email: "user1@example.com", role: "user" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập API để lấy danh sách tài khoản
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id: number) => {
    // Giả lập xóa tài khoản
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  const handleUpdate = (id: number) => {
    // Giả lập cập nhật tài khoản
    alert(`Cập nhật tài khoản có ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lý tài khoản</h2>

      {/* Các liên kết điều hướng đến các trang con */}
      <div className="mb-6">
        <Link href="/admin/accounts/create" className="mr-4 text-blue-500">
          Tạo tài khoản mới
        </Link>
        <Link href="/admin/accounts/update" className="text-blue-500">
          Cập nhật thông tin tài khoản
        </Link>
      </div>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr>
              <th className="p-2 border-b text-left">ID</th>
              <th className="p-2 border-b text-left">Tên người dùng</th>
              <th className="p-2 border-b text-left">Email</th>
              <th className="p-2 border-b text-left">Vai trò</th>
              <th className="p-2 border-b text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td className="p-2 border-b">{account.id}</td>
                <td className="p-2 border-b">{account.username}</td>
                <td className="p-2 border-b">{account.email}</td>
                <td className="p-2 border-b">{account.role}</td>
                <td className="p-2 border-b text-center">
                  <button
                    className="text-yellow-500 mr-4"
                    onClick={() => handleUpdate(account.id)}
                  >
                    Cập nhật
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(account.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageAccounts;
