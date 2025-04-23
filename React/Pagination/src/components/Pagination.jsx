import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage; // 1 * 20 => 20
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //=> 20 - 1 , 2 => 19 , 18 =>
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const fetchdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Fetched Comments
      </h2>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {currentItem.map((elem) => (
          <div
            key={elem.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              <span className="text-gray-500">Name : </span>
              {elem.name}
            </h3>
            <p className="text-sm text-blue-600 mb-2">
              <span className="text-green-500">Email : </span> {elem.email}
            </p>
            <p className="text-gray-700">
              <span className="text-red-500">Comment : </span>
              {elem.body}
            </p>
          </div>
        ))}

        <div className="flex justify-center items-center gap-4 mt-8">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
  >
    Prev
  </button>

  <span className="px-4 py-2 bg-white border rounded-md shadow text-gray-700 font-medium">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
  >
    Next
  </button>
</div>

      </div>
    </div>
  );
};

export default Pagination;
