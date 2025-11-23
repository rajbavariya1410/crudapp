import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ContantApp() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    roll: "",
    date: "",
    status: "",
  });

  const [data, setData] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const addAttendance = (e) => {
    e.preventDefault();

    if (!formData.status) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select attendance status!",
      });
      return;
    }

    setData([...data, formData]);

    Swal.fire({
      title: "Good job!",
      text: "Your attendance has been added successfully!",
      icon: "success",
    });

    // Reset form
    setFormData({
      id: "",
      name: "",
      roll: "",
      date: "",
      status: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-indigo-700 mb-6">
        CRUD App (Create | Read | Update | Delete)
      </h1>

      {/* Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-lg font-semibold text-indigo-700 mb-4">Add Attendance</h2>
        <form onSubmit={addAttendance} className="space-y-4 text-sm sm:text-base">
          {/* ID */}
          <div>
            <label className="block font-medium mb-1">ID</label>
            <input
              type="number"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter ID"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Student Name</label>
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">- Select Student -</option>
              <option value="Avtar">Avtar</option>
              <option value="Paras">Paras</option>
              <option value="Kartik">Kartik</option>
              <option value="Raj">Raj</option>
              <option value="Vijay">Vijay</option>
              <option value="Amit">Amit</option>
              <option value="Alpesh">Alpesh</option>
              <option value="Bhoomi">Bhoomi</option>
            </select>
          </div>

          {/* Roll */}
          <div>
            <label className="block font-medium mb-1">Roll Number</label>
            <input
              type="number"
              name="roll"
              value={formData.roll}
              onChange={handleChange}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Roll No"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Status */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="Present"
                checked={formData.status === "Present"}
                onChange={handleChange}
                required
              />
              Present
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="Absent"
                checked={formData.status === "Absent"}
                onChange={handleChange}
              />
              Absent
            </label>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <input
              type="submit"
              value="Add Attendance"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition"
            />
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Attendance Records</h2>
          <p className="text-sm text-gray-600">
            Date: <span className="font-medium text-gray-800">{new Date().toLocaleDateString()}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm sm:text-base divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">#</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Roll No</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.length > 0 ? (
                data.map((std, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{std.id}</td>
                    <td className="px-4 py-2">{std.name}</td>
                    <td className="px-4 py-2">{std.roll}</td>
                    <td className="px-4 py-2">{std.date}</td>
                    <td
                      className={`px-4 py-2 font-medium ${
                        std.status === "Present" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {std.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4 italic">
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
