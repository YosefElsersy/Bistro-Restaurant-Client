import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import avatarImg from "../assets/avatar.jpg"
import { Link, useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  // logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="z-300">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL? <img alt="" src={user.photoURL} /> : <img alt="" src={avatarImg} />}
              
            </div>
          </label>
        </div>
        <div className="drawer-side z-[500] h-full w-full">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#ffffff] text-base-content z-[500]">
            {/* Sidebar content here */}
            <li>
              <Link href="/update-profile">Profile</Link>
            </li>
            <li>
              <Link href="/order">Order</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
