import React from "react";

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col justify-center px-16 py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-6">Welcome back</h2>
      <p className="text-gray-500 mb-6">
        Please enter your details to sign in to your account.
      </p>

      <form  className="space-y-4">
        {/* Email input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
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
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Remember me checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-success"
          />
          <span>Remember for 30 days</span>
        </div>

        {/* Sign in button */}
        <button
          type="submit"
          className="btn bg-green-900 hover:bg-green-700 w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
