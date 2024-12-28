"use client"; // Đảm bảo rằng component này chỉ chạy trên client

import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [statistics, setStatistics] = useState({
    totalAudio: 0,
    totalViews: 0,
    mostListenedAudio: "Chưa có dữ liệu",
    totalVisitors: 0,
  });

  useEffect(() => {
    // Giả lập việc lấy dữ liệu từ API hoặc backend
    setTimeout(() => {
      setStatistics({
        totalAudio: 120, // Ví dụ: tổng số audio trong hệ thống
        totalViews: 10000, // Ví dụ: tổng lượt views của tất cả các bài hát
        mostListenedAudio: "Thời sự quốc tế 2024", // Ví dụ: bài hát được nghe nhiều nhất
        totalVisitors: 5000, // Ví dụ: tổng số lượt truy cập
      });
    }, 1000); // Giả lập một khoảng thời gian load dữ liệu
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>
      <p className="mb-6">Chào mừng bạn đến với trang quản trị của hệ thống.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Widget 1: Tổng số Audio */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Tổng số Audio</h3>
          <p className="text-3xl font-bold">{statistics.totalAudio}</p>
        </div>

        {/* Widget 2: Tổng lượt Views */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Tổng lượt Views</h3>
          <p className="text-3xl font-bold">{statistics.totalViews}</p>
        </div>

        {/* Widget 3: Audio Nghe Nhiều Nhất */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Audio Nghe Nhiều Nhất</h3>
          <p className="text-xl">{statistics.mostListenedAudio}</p>
        </div>

        {/* Widget 4: Tổng số Lượt Truy Cập */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Tổng số Lượt Truy Cập</h3>
          <p className="text-3xl font-bold">{statistics.totalVisitors}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Các Báo Cáo Khác</h2>
        <p>
          Đây là các báo cáo khác liên quan đến các hoạt động của hệ thống...
        </p>
      </div>
    </div>
  );
}
