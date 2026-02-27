import { useNavigate } from "react-router";
import { instance } from "../api/axiosInstance";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await instance.post("/api/login", loginInfo);
    const token = res?.data?.token;
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center px-16 py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-6">Welcome back</h2>
      <p className="text-gray-500 mb-6">
        Please enter your details to sign in to your account.
      </p>

      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
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

        {/* Remember me checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-success" />
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
