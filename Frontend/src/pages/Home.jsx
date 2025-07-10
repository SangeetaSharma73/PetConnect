import React from "react";
import { TopNavbar } from "../components/TopNavbar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LastFooter } from "../components/LastFooter";
// import useGeolocation from "../hooks/useGeolocation";
// import MapView  from "../components/MapView";
import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import MapView from "../components/MapView";
import { getCityFromCoords, getDistanceInKm } from "../utils/geocode";
import { Heading } from "../components/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../utils/list.json";
import { Cards } from "../components/Cards";
import { SubHeading } from "../components/SubHeading";
import { HomeCardSlider } from "../components/HomeCardSlider";
import Contact from "../components/Contact";

export const Home = () => {
  const filterDog = list.filter((data) => data.species === "Dog").slice(0, 6); // limit to 3 dogs
  const filterCat = list.filter((data) => data.species === "Cat").slice(0, 6); // limit to 3 cats

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { location, error } = useGeolocation();

  return (
    <>
      <div className="bg-emerald-50 m-auto">
        <TopNavbar />
        <Navbar />
        <HomeCardSlider />

        <div className="bg-blue-50 ">
          <Heading title="Welcome to PetConnect " />
          <div className="">
            <SubHeading title="Top 6 Pets for Adoption" />
            {/* <h2>Adoption Available for dogs</h2> */}
            <Slider {...settings}>
              {filterDog.map((item) => (
                <Cards item={item} />
              ))}
            </Slider>

            <SubHeading title="Available cats for Adoption" />
            <Slider {...settings}>
              {filterCat.map((item) => (
                <Cards item={item} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-3">
          <SubHeading title="Contact us for more..." />
          <Contact />
        </div>

        <div style={{ padding: "20px" }}>
          <h1>Welcome to PetConnect 🐾</h1>

          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          
          {location.lat && location.lng ? (
            <>
              <p>
                Your Location: 📍 {location.lat}, {location.lng}
              </p>
              <MapView location={location} />
            </>
          ) : (
            <p>Fetching your location...</p>
          )}
        </div>
        <hr />
        <Footer />
        <LastFooter />
      </div>
    </>
  );
};
