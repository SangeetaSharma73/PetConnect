import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        // "https://learnjavascript.onrender.com/api/auth/forgot-password",
        "http://localhost:8000/api/auth/forgot-password",
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
        setMessage(result.msg || "Password reset link sent to your email.");
        setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
      } else {
        setMessage(result.msg || "Error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <label className="block">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <button type="submit" className="btn bg-emerald-600 mt-4 w-full">
          Send Reset Link
        </button>
      </form>

      {message && (
        <p className="text-center mt-2 text-sm text-gray-500">{message}</p>
      )}
    </div>
  );
};
