import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const [currentPage, setCurretPage] = useState(1);
//   const totalPages = Math.ceil(character.length / 6)
const [totalPages , setTotalPages] = useState(1)
const [loading , setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      setCharacter(response.data.results.slice(0, 6));
      setLoading(false)
      // console.log(response.data.info.pages)
      // console.log(response.data.results)
      setTotalPages(response.data.info.pages)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  if (loading) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <h2 className="text-xl font-semibold text-gray-800">
         Data Fetching... Please wait a moment.
       </h2>
     </div>
   );
 }
 

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Rick and Morty Characters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {character.map((elem) => (
          <div
            key={elem.id}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 text-center"
          >
            <img
              src={elem.image}
              alt={elem.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{elem.name}</h3>
            <p className="text-gray-600">{elem.species}</p>
            <p
              className={`font-medium ${
                elem.status === "Alive" ? "text-green-600" : "text-red-600"
              }`}
            >
              {elem.status}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurretPage((prev) => Math.max(prev - 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurretPage((prev) => Math.min(prev + 1))}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
