import { MdDashboard } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiCalendarDotDuotone } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";

import { NavLink } from "react-router";

export default function Sidebar() {
  const navLinks = [
    { label: "Dahsboard", icon: MdDashboard, to: "/dashboard" },
    { label: "Tasks", icon: HiOutlineClipboardDocumentList, to: "/" },
    { label: "Calendar", icon: PiCalendarDotDuotone, to: "/" },
    { label: "Analytics", icon: TbBrandGoogleAnalytics, to: "/" },
    { label: "Team", icon: HiOutlineUsers, to: "/" },
  ];

  const generalLinks = [
    { label: "Settings", icon: CiSettings, to: "/settings" },
    { label: "Help", icon: IoHelpBuoyOutline, to: "/" },
    { label: "Logout", icon: MdLogout, to: "/" },
  ];
  return (
    <div className="bg-base-200 min-h-[calc(100vh-40px)] max-w-48 rounded-2xl p-2 lg:p-8">
      {/* logo  */}
      <h2 className="text-lg font-semibold  mb-16">Denezo</h2>
      {/* manu links */}
      <h4 className="uppercase text-sm text-base-content/60 font-medium mt-12 ">
        Manu
      </h4>
      <ul>
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={`flex items-center gap-4 py-3 relative transition text-base-content/70`}
          >
            <link.icon size={24} />
            <span className="hidden md:block">{link.label}</span>
          </NavLink>
        ))}
      </ul>
      <h4 className="uppercase text-sm text-base-content/60 font-medium mt-12 ">
        General
      </h4>
      <ul>
        {generalLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={`flex items-center gap-4 py-3 relative transition text-base-content/70`}
          >
            <link.icon size={24} />
            <span className="hidden md:block">{link.label}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
