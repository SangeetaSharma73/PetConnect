import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export const ResetPassword = () => {
  const { token } = useParams();
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
        // `https://learnjavascript.onrender.com/api/auth/reset-password/${token}`,
        `http://localhost:8000/api/auth/reset-password/${token}`,
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
        setMessage(result.msg || "Password reset successful.");
        setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
      } else {
        setMessage(result.msg || "Error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <label className="block">New Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Enter your new password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <button type="submit" className="btn bg-emerald-600 mt-4 w-full">
          Reset Password
        </button>
      </form>

      {message && (
        <p className="text-center mt-2 text-sm text-gray-500">{message}</p>
      )}
    </div>
  );
};
