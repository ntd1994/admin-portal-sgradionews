"use client"; // Đảm bảo component này chỉ chạy trên client

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  // useEffect luôn được gọi mỗi khi render, chỉ điều kiện hóa logic trong đây
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    // Nếu chưa có token, chuyển hướng đến trang login
    if (!storedToken) {
      router.push("/login");
    }
  }, [router]); // hook này chỉ chạy khi router thay đổi

  // Nếu chưa có token, không render gì, tránh hiển thị dashboard trước khi có token
  if (!token) {
    return null;
  }

  return <>{children}</>; // Render children khi đã có token
};

export default PrivateRoute;
