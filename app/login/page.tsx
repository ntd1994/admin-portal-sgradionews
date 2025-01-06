// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     // Kiểm tra thông tin đăng nhập
//     if (username === "admin@gmail.com" && password === "admin") {
//       // Sau khi đăng nhập thành công, chuyển hướng về trang admin
//       router.push("/admin/");
//     } else {
//       alert("Đăng nhập không thành công!");
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleLogin();
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
//     >
//       <div className="p-10 rounded-lg shadow-lg w-96 max-w-sm bg-gray-100">
//         <div className="text-center mb-6">
//           <Image
//             src="/SGLogo.png"
//             alt="Sai Gon Radio News"
//             width={120}
//             height={120}
//             className="mx-auto mb-4"
//           />
//           <h2 className="text-3xl font-bold text-gray-800">Đăng nhập</h2>
//           <p className="text-lg text-gray-600">
//             Chào mừng bạn đến với quản trị Sai Gon Radio News
//           </p>
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Email"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             onKeyDown={handleKeyDown} // Bắt sự kiện khi nhấn phím
//             className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onKeyDown={handleKeyDown} // Bắt sự kiện khi nhấn phím
//             className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleLogin}
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
//           >
//             Đăng nhập
//           </button>
//         </div>
//         <div className="text-center mt-4">
//           <a href="#" className="text-sm text-blue-600 hover:underline">
//             Quên mật khẩu?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Thêm state loading để theo dõi trạng thái gửi yêu cầu
  const [error, setError] = useState(""); // Lưu lỗi nếu có
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Chỉnh sửa ở đây: gửi "username" thay vì "email"
          body: JSON.stringify({ username: username, password: password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Nếu đăng nhập thành công, lưu JWT token (nếu có) và chuyển hướng
        localStorage.setItem("token", data.token);
        router.push("/admin/");
      } else {
        // Nếu có lỗi, hiển thị thông báo lỗi
        setError(data.message || "Đăng nhập không thành công!");
      }
    } catch (err) {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false); // Set lại trạng thái loading khi yêu cầu hoàn tất
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
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}{" "}
        {/* Hiển thị lỗi nếu có */}
        <div>
          <input
            type="text"
            placeholder="Username"
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
            className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
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
