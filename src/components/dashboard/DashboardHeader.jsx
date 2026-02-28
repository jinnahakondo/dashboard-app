import { Mail, Bell } from "lucide-react";
import { CiSearch } from "react-icons/ci";

export default function DashBoardHeader() {
  return (
    <header className="w-full bg-base-200 px-4 sm:px-6 py-4 flex flex-col gap-4 
                       md:flex-row md:items-center md:justify-between rounded-2xl">
      
      {/* Left section: Search bar */}
      <div className="relative w-full md:max-w-md">
        
        {/* Search input */}
        <input
          type="text"
          placeholder="Search task"
          className="w-full border border-base-300 bg-base-100 pl-9 pr-16 py-3 
                     rounded-full outline-none focus:border-primary"
        />

        {/* Search icon inside input */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
          <CiSearch size={22} />
        </span>

        {/* Keyboard shortcut badge */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs 
                          bg-base-200 px-2 py-1 rounded-md text-base-content/70 border">
          ⌘ F
        </span>
      </div>

      {/* Right section: icons and profile */}
      <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4">
        
        {/* Action icons */}
        <div className="flex items-center gap-3">
          
          {/* Mail button */}
          <button className="relative rounded-full bg-base-100 p-3 transition hover:bg-base-300">
            <Mail className="w-5 h-5 text-base-content/70" />
          </button>

          {/* Notification button */}
          <button className="relative rounded-full bg-base-100 p-3 transition hover:bg-base-300">
            <Bell className="w-5 h-5 text-base-content/70" />
          </button>
        </div>

        {/* User profile */}
        <div className="flex items-center gap-3">
          
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          {/* User info (hidden on very small screens) */}
          <div className="hidden sm:block leading-tight">
            <p className="font-medium">Totok Michael</p>
            <p className="text-base-content/70 text-xs">
              tmichael20@mail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}