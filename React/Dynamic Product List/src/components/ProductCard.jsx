import React from "react";
import useProduct from "../hooks/useProduct";

const ProductCard = () => {
  const { product, loading, setProduct } = useProduct();

    const toggleFavourite = (fav) => {
      const getData = JSON.parse(localStorage.getItem("favour"))||[];
      console.log("get", getData);
      console.log("set", fav);
      getData.push(fav)
      localStorage.setItem("favour", JSON.stringify(getData));

    };

//   const toggleFavourite = (id) => {
//     setProduct((prev) =>
//       prev.map((ele) => {(ele.id == id ? { ...ele, isFav: !ele.isFav } : ele)})
//     );
//   };
//   console.log("aaaa",product)

  if (loading) {
    return (
      <p className="text-center text-lg font-semibold my-10">
        Loading Products...
      </p>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {product.map((elem) => (
          <div
            key={elem.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div className="w-full h-60 overflow-hidden rounded-t-2xl">
              <img
                src={elem.image}
                alt={elem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {elem.name}
              </h4>
              <p className="text-sm text-gray-500 mb-2 capitalize">
                {elem.category}
              </p>
              <h5 className="text-lg font-bold text-indigo-600 mb-2">
                ₹ {elem.price}
              </h5>
              
              <button
                onClick={() =>
                  toggleFavourite({
                    id: elem.id,
                    name: elem.name,
                    image: elem.image,
                    price: elem.price,
                  })
                }
                className="absolute top-3 right-3 text-2xl"
              >
               
               {elem.isFav ? "❤️" : "🤍"}
              </button>

              
              {/* <button
                onClick={() => toggleFavourite(elem.id)}
                className="absolute top-3 right-3 text-2xl"
              >
                
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
