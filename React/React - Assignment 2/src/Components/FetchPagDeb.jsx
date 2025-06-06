import React, { useEffect, useState } from "react";

const FetchPagDeb = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searcher, setSearcher] = useState([]);

  const itemPerPage = 10;
  
  const lastIndexOfItem = currentPage * itemPerPage;
  const firstIndexOfItem = lastIndexOfItem - itemPerPage;
  const currentItem = searcher.slice(firstIndexOfItem, lastIndexOfItem);
  const totalPages = Math.ceil(searcher.length / itemPerPage);
  console.log(totalPages);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const check = await response.json();
        console.log(check);
        setData(check);
        setSearcher(check)
      } catch (error) {
        console.log("Something Went Wrong..", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-gray-600 text-2xl mt-10">
        Posts Loading...
      </h1>
    );
  }

  const searchCheck = (e) => {
    const search = e.target.value;
    console.log(search);

    if (search.length === 0) {
      setSearcher(data);
    } else {
      const response = data.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearcher(response);
      console.log("aaa", response);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Fetched Posts
      </h1>
      <div className="flex justify-center items-center my-4">
        <input
          type="text"
          placeholder="Enter something..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={searchCheck}
        />
      </div>

      {currentItem.map((elem) => (
        <div
          key={elem.id}
          className="bg-white shadow-md rounded-xl p-6 mb-4 border border-gray-200"
        >
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">
            User ID: {elem.userId}
          </h2>
          <h3 className="text-xl text-gray-800 font-medium mb-1">
            {elem.title}
          </h3>
          <p className="text-gray-600 text-base">{elem.body}</p>
        </div>
      ))}

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>

        <span className="text-lg font-medium text-gray-700">
          {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchPagDeb;
