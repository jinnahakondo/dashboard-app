import { MdDashboard } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiCalendarDotDuotone } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { NavLink } from "react-router";
export default function Sidebar() {
  const navLinks = [
    { label: "Dahsboard", icon: MdDashboard, to: "/dashboard" },
    { label: "Tasks", icon: HiOutlineClipboardDocumentList, to: "/" },
    { label: "Calendar", icon: PiCalendarDotDuotone, to: "/" },
    { label: "Analytics", icon: TbBrandGoogleAnalytics, to: "/" },
    { label: "Team", icon: HiOutlineUsers, to: "/" },
  ];
  return (
    <div className="bg-base-200 h-[calc(100vh-40px)] max-w-48 rounded-3xl p-8">
      {/* logo  */}
      <h2 className="text-lg font-semibold  mb-16">Dashboard</h2>
      {/* manu links */}
      <h4 className="uppercase text-sm text-base-content/60 font-medium mt-12 ">
        Manu
      </h4>
      <ul>
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={`flex items-center gap-4 py-3 relative transition`}
          >
            <span>
              <link.icon size={24} />
            </span>
            {link.label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
