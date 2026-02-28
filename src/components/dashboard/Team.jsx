import React, { useEffect, useState } from "react";
import { instance } from "../../api/axiosInstance";

export default function Team() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("/api/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="bg-base-100 rounded-2xl p-5 shadow-sm">

      {/* Header section */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">Team Collaboration</h2>
        <button className="btn btn-xs btn-outline border-green-800 text-green-800 rounded-full">
          + Add Member
        </button>
      </div>

      {/* User list section */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="flex items-center justify-between"
              >

                {/* Left side user info */}
                <div className="flex items-center gap-3">

                  {/* Avatar using first letter */}
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-900">
                    {user.name.charAt(0)}
                  </div>

                  {/* Name and project text */}
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-base-content/60">
                      Working on {user.email}
                    </p>
                  </div>
                </div>

                {/* Status badge */}
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium
                    ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "pending"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {user.status === "active"
                    ? "Completed"
                    : user.status === "pending"
                    ? "Pending"
                    : "In Progress"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}