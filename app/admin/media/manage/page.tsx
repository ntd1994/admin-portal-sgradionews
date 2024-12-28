"use client"; // Đảm bảo component này chỉ chạy ở phía client

import { useState } from "react";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai"; // Import icon dấu cộng từ react-icons

const ManageMedia = () => {
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      name: "Thời sự cập nhật sáng nay",
      duration: "3:45",
      views: 1200,
      uploadDate: "2024-01-01",
      uploadedBy: "Admin",
      size: "4MB",
      topic: "Thời sự",
    },
    {
      id: 2,
      name: "Chính trị và sự thay đổi",
      duration: "2:30",
      views: 800,
      uploadDate: "2024-01-02",
      uploadedBy: "Admin",
      size: "3MB",
      topic: "Chính trị",
    },
    {
      id: 3,
      name: "Tình hình dịch bệnh Covid-19",
      duration: "4:15",
      views: 2000,
      uploadDate: "2024-01-03",
      uploadedBy: "Admin",
      size: "5MB",
      topic: "Dịch bệnh",
    },
    {
      id: 4,
      name: "Thời sự quốc tế 2024",
      duration: "3:00",
      views: 950,
      uploadDate: "2024-01-04",
      uploadedBy: "Admin",
      size: "3.5MB",
      topic: "Quốc tế",
    },
    {
      id: 5,
      name: "Giới thiệu về môi trường sống",
      duration: "5:10",
      views: 3000,
      uploadDate: "2024-01-05",
      uploadedBy: "Admin",
      size: "6MB",
      topic: "Môi trường",
    },
    {
      id: 6,
      name: "Cập nhật chính sách giáo dục",
      duration: "3:50",
      views: 1450,
      uploadDate: "2024-01-06",
      uploadedBy: "Admin",
      size: "4.2MB",
      topic: "Giáo dục",
    },
    {
      id: 7,
      name: "Phân tích tình hình kinh tế 2024",
      duration: "2:45",
      views: 1150,
      uploadDate: "2024-01-07",
      uploadedBy: "Admin",
      size: "3.8MB",
      topic: "Kinh tế",
    },
    {
      id: 8,
      name: "Biến động thị trường chứng khoán",
      duration: "4:05",
      views: 1600,
      uploadDate: "2024-01-08",
      uploadedBy: "Admin",
      size: "5.1MB",
      topic: "Kinh tế",
    },
    {
      id: 9,
      name: "Tình hình chính trị khu vực Đông Nam Á",
      duration: "3:25",
      views: 2200,
      uploadDate: "2024-01-09",
      uploadedBy: "Admin",
      size: "4.7MB",
      topic: "Chính trị",
    },
    {
      id: 10,
      name: "Thông tin về tác động của biến đổi khí hậu",
      duration: "4:30",
      views: 1800,
      uploadDate: "2024-01-10",
      uploadedBy: "Admin",
      size: "5.3MB",
      topic: "Môi trường",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Tất cả");
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);

  const topics = [
    "Tất cả",
    "Thời sự",
    "Chính trị",
    "Dịch bệnh",
    "Quốc tế",
    "Môi trường",
    "Giáo dục",
    "Kinh tế",
  ];

  // Filter based on search term and selected topic
  const filteredItems = mediaItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === "") &&
      (selectedTopic === "Tất cả" || item.topic === selectedTopic)
  );

  const handleDelete = (id: number) => {
    setLoading(true);
    setTimeout(() => {
      setMediaItems(mediaItems.filter((item) => item.id !== id));
      setLoading(false);
      alert("Xóa thành công!");
    }, 1000);
  };

  const handleDeleteSelected = () => {
    setLoading(true);
    setTimeout(() => {
      setMediaItems(mediaItems.filter((item) => !selectedItems.has(item.id)));
      setSelectedItems(new Set());
      setLoading(false);
      alert("Đã xóa các mục đã chọn!");
    }, 1000);
  };

  const handleSelectItem = (id: number) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(id)) {
      newSelectedItems.delete(id);
    } else {
      newSelectedItems.add(id);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleEdit = (id: number) => {
    // Chuyển hướng sang trang chỉnh sửa
    console.log(`Chỉnh sửa media với ID: ${id}`);
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(`Chuyển sang trang ${pageNumber}`);
    // Xử lý phân trang ở đây
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lý Media</h2>

      {loading && <div>Đang xử lý...</div>}

      {/* Khung tìm kiếm và bộ lọc theo chủ đề */}
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        {/* Nút Upload */}
        <Link
          href="/admin/media/upload"
          className="bg-blue-500 text-white p-2 rounded-md flex items-center space-x-2"
        >
          <AiOutlinePlus /> <span>Tải lên Media</span>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full table-auto bg-gray-100">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2 text-left">
                <input
                  type="checkbox"
                  onChange={() => {
                    if (selectedItems.size === filteredItems.length) {
                      setSelectedItems(new Set());
                    } else {
                      setSelectedItems(
                        new Set(filteredItems.map((item) => item.id))
                      );
                    }
                  }}
                  checked={selectedItems.size === filteredItems.length}
                />
              </th>
              <th className="px-4 py-2 text-left">Tên bài hát</th>
              <th className="px-4 py-2 text-left">Thời gian</th>
              <th className="px-4 py-2 text-left">Lượt xem</th>
              <th className="px-4 py-2 text-left">Ngày upload</th>
              <th className="px-4 py-2 text-left">Người upload</th>
              <th className="px-4 py-2 text-left">Kích thước</th>
              <th className="px-4 py-2 text-left">Chủ đề</th>
              <th className="px-4 py-2 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.has(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.duration}</td>
                <td className="px-4 py-2">{item.views}</td>
                <td className="px-4 py-2">{item.uploadDate}</td>
                <td className="px-4 py-2">{item.uploadedBy}</td>
                <td className="px-4 py-2">{item.size}</td>
                <td className="px-4 py-2">{item.topic}</td>
                <td className="px-4 py-2 flex">
                  <button
                    className="bg-yellow-500 text-white p-2 rounded-md mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(1)}
          className="bg-gray-300 p-2 rounded-md"
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className="bg-gray-300 p-2 rounded-md"
        >
          2
        </button>
        <button
          onClick={() => handlePageChange(3)}
          className="bg-gray-300 p-2 rounded-md"
        >
          3
        </button>
      </div>
    </div>
  );
};

export default ManageMedia;
