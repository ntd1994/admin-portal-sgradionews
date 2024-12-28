"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập
    if (username === "admin@gmail.com" && password === "admin") {
      // Sau khi đăng nhập thành công, chuyển hướng về trang admin
      router.push("/admin/");
    } else {
      alert("Đăng nhập không thành công!");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="p-10 rounded-lg shadow-lg w-96 max-w-sm bg-gray-100">
        <div className="text-center mb-6">
          <Image
            src="/SGLogo.png"
            alt="Sai Gon Radio News"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">Đăng nhập</h2>
          <p className="text-lg text-gray-600">
            Chào mừng bạn đến với quản trị Sai Gon Radio News
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown} // Bắt sự kiện khi nhấn phím
            className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown} // Bắt sự kiện khi nhấn phím
            className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Đăng nhập
          </button>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
