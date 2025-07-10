import React from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        // "https://learnjavascript.onrender.com/api/auth/signup",
        "http://localhost:8000/api/auth/signup",
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
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(result.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={SignUpImg}
            alt="Signup Visual"
            className="max-w-3xl rounded-lg shadow-2xl"
          />
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}

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

                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}

                  <button type="submit" className="btn bg-emerald-600 mt-4">
                    Signup
                  </button>

                  <p className="pt-3 text-sm">
                    Have an account?{" "}
                    <span
                      className="link text-emerald-600 cursor-pointer"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </span>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
