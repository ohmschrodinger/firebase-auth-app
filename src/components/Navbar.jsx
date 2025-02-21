import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import './Navbar.css'; // optional if you want to separate Navbar styles

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">
        Firebase Google Auth & Context
      </h1>
      {user?.displayName ? (
        <button onClick={handleSignOut} className="btn">
          Logout
        </button>
      ) : (
        <Link to="/signin" className="link">
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Navbar;
