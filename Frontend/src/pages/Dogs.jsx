import React, { useState, useEffect } from "react";
import { TopNavbar } from "../components/TopNavbar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { LastFooter } from "../components/LastFooter";
import axios from "axios";
import { Cards } from "../components/Cards";
import { Pagination } from "../components/Pagination";

const Dogs = () => {
  const [dogList, setDogList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // State to handle sorting order (ascending or descending)
  const [selectedSpecies, setSelectedSpecies] = useState(""); // State for species filter

  const itemsPerPage = 15;

  useEffect(() => {
    // Fetch dog data from API
    axios
      // .get("http://localhost:8000/api/animals")
      .get("https://petconnect-6hra.onrender.com/api/animals")
      .then((response) => {
        setDogList(response.data);
        setFilteredList(response.data); // Initially set filtered list to all dogs
      })
      .catch((error) => console.error("Error fetching dog data", error));
  }, []);

  // Sorting function
  const sortDogs = (dogs, order) => {
    return dogs.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  // Filter function by species
  const filterBySpecies = (dogs, species) => {
    if (!species) return dogs;
    return dogs.filter(
      (dog) => dog.species.toLowerCase() === species.toLowerCase()
    );
  };

  // Update the filtered list whenever the sorting or species filter changes
  useEffect(() => {
    let filtered = filterBySpecies(dogList, selectedSpecies);
    filtered = sortDogs(filtered, sortOrder);
    setFilteredList(filtered);
  }, [dogList, selectedSpecies, sortOrder]);

  // Pagination logic
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <TopNavbar />
      <Navbar />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/close-up-great-danes-dog-with-pastel-background-dog-fashion-photo-generative-ai_796128-1796.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-emerald-500">
              Hello there
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Heading title="We are delighted to have you" />

      {/* Sort and Filter */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <label htmlFor="species" className="mr-2">
            Filter by Species:
          </label>
          <select
            id="species"
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
            className="select select-bordered"
          >
            <option value="">All Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            {/* Add more species as per your data */}
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="mr-2">
            Sort by Price:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="asc">Descending</option>
            <option value="desc">Ascending</option>
          </select>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>

      {/* ✅ Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {/* Dog Accessories Section */}
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <LastFooter />
    </>
  );
};

export default Dogs;
