import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [data, setData] = useState([]);

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
        {data.map((elem) => (
          <div
            key={elem.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              <span className="text-gray-500">Name : </span>
              {elem.name}
            </h3>
            <p className="text-sm text-blue-600 mb-2">
              <span
                className="text-green-500"
              >
                Email :{" "}
              </span>{" "}
              {elem.email}
            </p>
            <p className="text-gray-700">
              <span className="text-red-500">Comment : </span>
              {elem.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetch;
