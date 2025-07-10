// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const navigate = useNavigate();
//   const [showLogin, setShowLogin] = useState(false);
//   const token = localStorage.getItem("token");
//   const handleLoginClick = () => {
//     navigate("/login"); // Navigate to login page
//   };

//   const handleLogout = async () => {
//     try {
//       await fetch("http://localhost:8000/api/auth/logout", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     } catch (error) {
//       console.error("Logout error:", error);
//     }

//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = (
//     <>
//       <li>
//         <Link
//           to="/dogs"
//           className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
//         >
//           Dogs
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/cats"
//           className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300"
//         >
//           Cats
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/birds"
//           className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
//         >
//           Birds
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/accessories"
//           className="text-xl  text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
//         >
//           Accessories
//         </Link>
//       </li>
//     </>
//   );

//   return (
//     <div
//       className={`navbar bg-slate-100 py-5 z-50 ${
//         sticky
//           ? "sticky top-0 shadow-md bg-base-200 transition duration-300"
//           : "shadow-sm"
//       }`}
//     >
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navItems}
//           </ul>
//         </div>
//         <Link
//           to="/"
//           className="btn btn-ghost text-2xl bg-emerald-600 text-white px-6 rounded-t-full rounded-b-full"
//         >
//           petConnect
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navItems}</ul>
//       </div>
//       <div className="navbar-end">
//         <div className="hidden md:block px-3">
//           <label className="flex items-center gap-2 border border-gray-400 rounded-md px-2 py-1 focus-within:border-emerald-600">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </g>
//             </svg>
//             <input
//               type="search"
//               placeholder="Search"
//               className="outline-none border-none bg-transparent w-full cursor-pointer"
//             />
//           </label>
//         </div>
//         <FontAwesomeIcon
//           icon={faHeart}
//           className="text-2xl border-emerald-600 hover:text-red-600 mx-2"
//         />
//         {/* <div>
//           <button
//             className="bg-emerald-600 text-white px-3 py-2 rounded-md duration-300 cursor-pointer hover:bg-emerald-700"
//             onClick={handleLoginClick} // Call navigate to login page
//           >
//             Login
//           </button>
//         </div> */}
//         <div>
//           {!token ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-emerald-600 px-4 py-2 rounded"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 px-4 py-2 rounded text-white"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0); // State to track wishlist items
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const token = localStorage.getItem("token");

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleLogout = async () => {
    try {
      // await fetch("http://localhost:8000/api/auth/logout", {
      await fetch("https://petconnect-6hra.onrender.com/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    }

    localStorage.removeItem("token");
    navigate("/login");
  };

  // Handle add to cart
  const handleAddToCart = (item) => {
    // This is a mock function, you can implement actual logic here to add the item to the cart
    // Updating the wishlist count when an item is added to the cart
    setWishlistCount(wishlistCount + 1); // Increment wishlist count
    console.log(`${item.species} added to cart!`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link
          to="/dogs"
          className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
        >
          Dogs
        </Link>
      </li>
      <li>
        <Link
          to="/cats"
          className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300"
        >
          Cats
        </Link>
      </li>
      <li>
        <Link
          to="/birds"
          className="text-xl text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
        >
          Birds
        </Link>
      </li>
      <li>
        <Link
          to="/accessories"
          className="text-xl  text-black px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 "
        >
          Accessories
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar bg-slate-100 py-5 z-50 ${
        sticky
          ? "sticky top-0 shadow-md bg-base-200 transition duration-300"
          : "shadow-sm"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl bg-emerald-600 text-white px-6 rounded-t-full rounded-b-full"
        >
          petConnect
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="hidden md:block px-3">
          <label className="flex items-center gap-2 border border-gray-400 rounded-md px-2 py-1 focus-within:border-emerald-600">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="outline-none border-none bg-transparent w-full cursor-pointer"
            />
          </label>
        </div>
        {/* Wishlist Icon with count */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-2xl border-emerald-600 hover:text-red-600 mx-2"
          />
          <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
            {wishlistCount}
          </span>
        </div>

        <div>
          {!token ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-emerald-600 px-4 py-2 rounded text-white"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
