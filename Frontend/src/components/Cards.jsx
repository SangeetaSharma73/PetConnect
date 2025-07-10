import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ item, handleAddToCart }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.photo} alt="Img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.breed}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              {/* Link to species page */}
              <Link
                to={`/${item.species.toLowerCase()}s`}
                className="text-xl badge badge-outline hover:bg-emerald-100 cursor-pointer transition-all duration-300"
              >
                {item.species}
              </Link>

              {/* Add to Cart button */}
              <button
                onClick={() => handleAddToCart(item)} // Handle add to cart
                className="badge badge-outline hover:bg-blue-100 cursor-pointer transition-all duration-300 px-4 py-2"
              >
                Add to Cart
              </button>

              {/* Price with rounded border */}
              <p className="badge badge-outline rounded-full border-emerald-600 hover:bg-emerald-100 cursor-pointer transition-all duration-300 px-4 py-2">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
