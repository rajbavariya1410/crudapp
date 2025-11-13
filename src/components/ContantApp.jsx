import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function ContantApp() {
  const [data, setData] = useState([]);
  const id = useRef("");
  const name = useRef("");
  const roll = useRef("");
  const date = useRef("");
  const status = useRef("");
  const navigate = useNavigate();

  const addAttendnaceFormData = async (e) => {
    e.preventDefault();
    const insert = {
      id: id.current.value,
      name: name.current.value,
      roll: roll.current.value,
      date: date.current.value,
      status: status.current.value,
    };
    try {
      setData([...data, insert]);
      Swal.fire({
        title: "Good job!",
        text: "Your Attendance added successfully!",
        icon: "success",
      });
      e.target.reset();
    } catch (error) {
      console.log("error generating while add attendance", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-3xl font-semibold text-indigo-700 mb-6">
        CRUD App (Create | Read | Update | Delete)
      </h1>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-lg font-semibold text-indigo-700 mb-4">
          Add Attendance
        </h2>
        <form
          onSubmit={addAttendnaceFormData}
          className="space-y-4 text-sm sm:text-base"
        >
          {/* ID */}
          <div>
            <label className="block font-medium mb-1">ID</label>
            <input
              type="number"
              ref={id}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter ID"
            />
          </div>

          {/* Student Name */}
          <div>
            <label className="block font-medium mb-1">Student Name</label>
            <select
              ref={name}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

          {/* Roll Number */}
          <div>
            <label className="block font-medium mb-1">Roll Number</label>
            <input
              type="number"
              ref={roll}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Roll No"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              ref={date}
              className="w-full border border-indigo-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Attendance Status */}
          <div>
            <label className="block font-medium mb-2">Status</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-1">
                <input type="radio" name="status" ref={status} value="Present" />
                Present
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="status" ref={status} value="Absent" />
                Absent
              </label>
            </div>
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

      {/* Table Section */}
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Attendance Records
          </h2>
          <p className="text-sm text-gray-600">
            Date:{" "}
            <span className="font-medium text-gray-800">
              {new Date().toLocaleDateString()}
            </span>
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm sm:text-base divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  #
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  Roll No
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  Status
                </th>
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
                        std.status === "Present"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {std.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 py-4 italic"
                  >
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
