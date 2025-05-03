import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Loading character details...</h2>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-red-600">Character not found</h2>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center mb-8">
        <img
          src={character.image}
          alt={character.name}
          className="w-40 h-40 mx-auto rounded-full mb-6 shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{character.name}</h1>
        <p className="text-gray-700 text-lg mb-1">
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <p className="text-gray-700 text-lg mb-1">
          <span className="font-semibold">Status:</span>
          <span className={`ml-1 font-medium ${character.status === "Alive" ? "text-green-600" : "text-red-600"}`}>
            {character.status}
          </span>
        </p>
        <p className="text-gray-700 text-lg mb-1">
          <span className="font-semibold">Gender:</span> {character.gender}
        </p>
        <p className="text-gray-700 text-lg mb-1">
          <span className="font-semibold">Origin:</span> {character.origin.name}
        </p>
        <p className="text-gray-700 text-lg mb-1">
          <span className="font-semibold">Location:</span> {character.location.name}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Created:</span> {' '}
          {new Date(character.created).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </p>
      </div>

    
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Episodes</h2>
        <ul className="list-disc pl-5 space-y-1 text-left">
          {character.episode.map((ep, index) => (
            <li key={index} className="text-blue-600 hover:underline break-words">
              <span className="font-semibold">URL:</span> {ep}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
