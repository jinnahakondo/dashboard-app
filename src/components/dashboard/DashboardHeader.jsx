import { Mail, Bell } from "lucide-react";
import { CiSearch } from "react-icons/ci";

export default function DashBoardHeader() {
  return (
    <div className="w-full bg-base-200 px-6 py-4 flex items-center justify-between rounded-2xl">
      {/* Left Side - Search */}
      <div className="relative w-full max-w-107 ">
        <input
          type="text"
          placeholder="Search task"
          className="w-full border border-base-300 bg-base-100 pl-9 p-3 rounded-full outline-0"
        />

        {/* Search Icon */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <CiSearch size={24} />
        </span>

        {/* Shortcut Badge */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-500 border">
          ⌘ F
        </span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Mail Icon */}
        <button className="relative rounded-full bg-base-100 p-3 transition ">
          <Mail className="w-5 h-5 text-base-content/70" />
        </button>

        {/* Notification Icon */}
        <button className="relative rounded-full bg-base-100 p-3  transition">
          <Bell className="w-5 h-5 text-base-content/70" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium mb-0.5">Totok Michael</p>
            <p className="text-base-content/70 text-xs">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
