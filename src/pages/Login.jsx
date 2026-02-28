import React from "react";
import LoginPageLeft from "../components/LoginPageLeft";
import LoginForm from "../components/LoginForm";
import { Navigate } from "react-router";

export default function Login() {
  // Check if user is already authenticated
  const token = localStorage.getItem("token");

  // Redirect to dashboard if token exists
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center lg:bg-base-300 p-4">
      {/* Login container */}
      <div
        className="w-full max-w-4xl bg-base-100 rounded-3xl overflow-hidden lg:shadow-2xl 
                      grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left side (image / info) */}
        <LoginPageLeft />

        {/* Right side (form) */}
        <LoginForm />
      </div>
    </div>
  );
}
