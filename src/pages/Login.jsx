import React from "react";
import LoginPageLeft from "../components/LoginPageLeft";
import LoginForm from "../components/LoginForm";
import { Navigate } from "react-router";

export default function Login() {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="min-h-screen grid place-items-center bg-base-300 shadow-2xl ">
      <div className="max-w-4xl lg:grid grid-cols-2 mx-auto rounded-3xl overflow-hidden bg-base-100">
        <LoginPageLeft />
        <LoginForm />
      </div>
    </div>
  );
}
