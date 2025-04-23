import React, { useEffect, useState } from 'react';

const FavCart = () => {
  const [favi, setFavi] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favour')) || [];
    console.log("Stored Favourites:", stored);
    setFavi(stored);
  }, []);


  const removeFromFavourites = (id) =>{

      const store = favi.filter((e)=> e.id !== id)
      setFavi(store)
      localStorage.setItem('favour' , JSON.stringify(store))
  }

  if (favi.length === 0) {
    return (
      <h2 className="text-center text-xl font-semibold text-gray-700 mt-10">
        No Products Added to Favourites
      </h2>
    );
  }


  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Your Favourite Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favi.map((elem) => (
          <div
            key={elem.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="w-full h-60 overflow-hidden rounded-t-2xl">
              <img
                src={elem.image}
                alt={elem.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-1">{elem.name}</h4>
              {elem.category && (
                <p className="text-sm text-gray-500 mb-2 capitalize">{elem.category}</p>
              )}
              <h5 className="text-lg font-bold text-indigo-600 mb-2">₹ {elem.price}</h5>
              <button
                onClick={() => removeFromFavourites(elem.id)}
                className="absolute top-3 right-3 text-2xl cursor-pointer"
                title="Remove from favourites"
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavCart;
