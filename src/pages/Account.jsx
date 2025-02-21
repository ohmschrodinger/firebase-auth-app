import React from 'react';
import { UserAuth } from '../context/AuthContext';
// import './Account.css'; // optional for separate styling

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-container">
      <h1 className="account-title">Account</h1>
      <div className="account-welcome">
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className="btn logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Account;
