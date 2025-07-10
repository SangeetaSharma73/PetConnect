// import React, { useEffect, useRef } from "react";
// import LoginImg from "../assets/LoginImg.jpg";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

// export const Login = () => {
//   const navigate = useNavigate();
//   const loginRef = useRef();
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", result);
//         localStorage.setItem("token", result.token);
//         navigate("/");
//       } else {
//         alert(result.message || "Login failed. Check your credentials.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   useEffect(() => {
//     loginRef.current?.showModal();
//   }, []);

//   return (
//     <dialog id="LoginId" className="modal" ref={loginRef}>
//       <div className="modal-box max-w-5xl">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <button
//             type="button"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => loginRef.current.close()}
//           >
//             ✕
//           </button>

//           <div className="hero bg-base-100">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <img
//                 src={LoginImg}
//                 alt="Login Visual"
//                 className="max-w-xl rounded-lg shadow-2xl"
//               />
//               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                 <div className="card-body">
//                   <fieldset className="fieldset">
//                     <label className="fieldset-label">Email</label>
//                     <input
//                       type="email"
//                       className="input"
//                       placeholder="Email"
//                       {...register("email", { required: true })}
//                     />
//                     {errors.email && (
//                       <span className="text-red-500">Email is required</span>
//                     )}

//                     <label className="fieldset-label mt-4">Password</label>
//                     <input
//                       type="password"
//                       className="input"
//                       placeholder="Password"
//                       {...register("password", { required: true })}
//                     />
//                     {errors.password && (
//                       <span className="text-red-500">Password is required</span>
//                     )}

//                     <div className="mt-2">
//                       <a
//                         className="link link-hover"
//                         onClick={() => navigate("/forgot-password")}
//                       >
//                         Forgot password?
//                       </a>
//                     </div>

//                     <button type="submit" className="btn bg-emerald-600 mt-4">
//                       Login
//                     </button>

//                     <p className="pt-3 text-sm">
//                       New here?{" "}
//                       <span
//                         className="link text-emerald-600 cursor-pointer"
//                         onClick={() => {
//                           loginRef.current.close();
//                           navigate("/signup");
//                         }}
//                       >
//                         Signup
//                       </span>
//                     </p>
//                   </fieldset>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// };

import React, { useEffect, useRef } from "react";
import LoginImg from "../assets/LoginImg.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const navigate = useNavigate();
  const loginRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        // "https://learnjavascript.onrender.com/api/auth/login/",
        "http://localhost:8000/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);
        localStorage.setItem("token", result.token);
        navigate("/");
      } else {
        alert(result.message || "Login failed. Check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    loginRef.current?.showModal();
  }, []);

  return (
    <dialog id="LoginId" className="modal" ref={loginRef}>
      <div className="modal-box max-w-5xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => loginRef.current.close()}
          >
            ✕
          </button>

          <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={LoginImg}
                alt="Login Visual"
                className="max-w-xl rounded-lg shadow-2xl"
              />
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}

                    <label className="fieldset-label mt-4">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-500">Password is required</span>
                    )}

                    <div className="mt-2">
                      <a
                        className="link link-hover"
                        onClick={() => navigate("/forgot-password")}
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button type="submit" className="btn bg-emerald-600 mt-4">
                      Login
                    </button>

                    <p className="pt-3 text-sm">
                      New here?{" "}
                      <span
                        className="link text-emerald-600 cursor-pointer"
                        onClick={() => {
                          loginRef.current.close();
                          navigate("/signup");
                        }}
                      >
                        Signup
                      </span>
                    </p>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};
