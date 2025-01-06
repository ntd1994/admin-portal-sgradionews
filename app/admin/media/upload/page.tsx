// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const UploadMedia = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Vui lòng chọn một file MP3!");
//       return;
//     }

//     setLoading(true);

//     // Giả lập upload file
//     setTimeout(() => {
//       alert("Upload thành công!");
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Tải lên Media (MP3)</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-lg mb-2">Chọn file MP3</label>
//           <input
//             type="file"
//             accept=".mp3"
//             onChange={handleFileChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded-md w-full"
//             disabled={loading}
//           >
//             {loading ? "Đang tải lên..." : "Tải lên"}
//           </button>
//         </div>
//       </form>

//       <div className="mt-6">
//         <Link href="/admin/media/manage" className="text-blue-500">
//           Quay lại Quản lý Media
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UploadMedia;

"use client";

import { useState } from "react";

const UploadMedia = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [fileInfoList, setFileInfoList] = useState<
    {
      id: number;
      name: string;
      size: string;
      url: string;
      uploadDate: string;
      views: number;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

  // Xử lý khi chọn file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  // Upload file
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files || files.length === 0) {
      alert("Vui lòng chọn ít nhất một file MP3!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Phản hồi từ API:", data);

        if (data.audioFiles && Array.isArray(data.audioFiles)) {
          setFileInfoList((prevFileInfoList) => [
            ...prevFileInfoList,
            ...data.audioFiles.map((file) => ({
              id: file.id,
              name: file.name,
              size: file.size,
              url: file.url,
              uploadDate: file.uploadDate,
              views: file.views,
            })),
          ]);
          alert(data.message || "Tải lên thành công!");
        } else {
          alert(
            `Dữ liệu không hợp lệ.\nPhản hồi từ API: ${JSON.stringify(
              data,
              null,
              2
            )}`
          );
        }
      } else {
        alert("Có lỗi xảy ra khi tải lên.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi tải lên.");
    } finally {
      setLoading(false);
    }
  };

  // Xóa file
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:9000/api/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFileInfoList((prevFileInfoList) =>
          prevFileInfoList.filter((file) => file.id !== id)
        );
        alert("Xóa file thành công!");
      } else {
        alert("Không thể xóa file.");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Không thể xóa file.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tải lên Media (MP3)</h2>

      {/* Form chọn file */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2">Chọn file MP3</label>
          <input
            type="file"
            accept=".mp3"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            multiple
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-md w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Đang tải lên..." : "Tải lên"}
        </button>
      </form>

      {/* Danh sách file đã tải lên */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Danh sách file đã tải lên
        </h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">STT</th>
              <th className="p-2 border">Tên file</th>
              <th className="p-2 border">Dung lượng</th>
              <th className="p-2 border">Ngày tải lên</th>
              <th className="p-2 border">Lượt xem</th>
              <th className="p-2 border">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {fileInfoList.length > 0 ? (
              fileInfoList.map((file, index) => (
                <tr key={file.id} className="border-b">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{file.name}</td>
                  <td className="p-2 border">{file.size}</td>
                  <td className="p-2 border">
                    {new Date(file.uploadDate).toLocaleString()}
                  </td>
                  <td className="p-2 border">{file.views}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="bg-red-500 text-white p-1 rounded-md"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  Chưa có file nào được tải lên.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadMedia;
