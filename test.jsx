// src/pages/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, remember });
  };

  return (
    <div className="">
      {/* Left side - branding and info */}
  

      {/* Right side - login form */}
 
    </div>
  );
};

export default Login;