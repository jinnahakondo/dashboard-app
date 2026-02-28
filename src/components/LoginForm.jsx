import { useNavigate } from "react-router";
import { instance } from "../api/axiosInstance";
import { useState } from "react";

export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await instance.post("/api/login", loginInfo);
      const token = res?.data?.token;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 bg-white">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Welcome back</h2>

      <p className="text-gray-500 mb-6">
        Please enter your details to sign in to your account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="name@company.com"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Password input */}
        <div className="form-control w-full">
          <label className="label flex justify-between">
            <span className="label-text">Password</span>
            <a href="#" className="text-green-700 text-sm">
              Forgot password?
            </a>
          </label>
          <input
            name="password"
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-success" />
          <span className="text-sm">Remember for 30 days</span>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="btn bg-green-900 hover:bg-green-700 w-full text-white"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
