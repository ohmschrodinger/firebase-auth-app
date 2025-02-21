import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // This now uses signInWithPopup in your AuthContext (make sure to update it there accordingly)
      await googleSignIn();
      <Link to="/Home" className="link">
      Sign in
    </Link>
      // navigate('/src/pages/Account.jsx');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign in</h1>
      <div className="signin-button-wrapper">
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Signin;
