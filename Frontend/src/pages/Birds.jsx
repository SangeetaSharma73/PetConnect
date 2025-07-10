import React, { useState } from "react";
import { TopNavbar } from "../components/TopNavbar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { LastFooter } from "../components/LastFooter";
import list from "../utils/list.json";
import { Cards } from "../components/Cards";
import { Pagination } from "../components/Pagination"; // ✅ import

const Birds = () => {
  const filterBirds = list.filter((item) => item.species === "Birds");
  const itemsPerPage = 15;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filterBirds.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filterBirds.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/colorful-birds-perched-branch-with-green-bokeh-background_633842-17455.jpg?uid=R195686404&ga=GA1.1.1722910097.1743140041&semt=ais_hybrid&w=740)",
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

      {/* Birds Accessories Section */}
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

export default Birds;
