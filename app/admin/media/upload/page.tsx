"use client";

import { useState } from "react";
import Link from "next/link";

const UploadMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Vui lòng chọn một file MP3!");
      return;
    }

    setLoading(true);

    // Giả lập upload file
    setTimeout(() => {
      alert("Upload thành công!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tải lên Media (MP3)</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-2">Chọn file MP3</label>
          <input
            type="file"
            accept=".mp3"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
            disabled={loading}
          >
            {loading ? "Đang tải lên..." : "Tải lên"}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <Link href="/admin/media/manage" className="text-blue-500">
          Quay lại Quản lý Media
        </Link>
      </div>
    </div>
  );
};

export default UploadMedia;
