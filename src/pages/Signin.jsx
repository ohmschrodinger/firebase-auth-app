import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import './Signin.css'; // optional for separate styling

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.prompt("whatttttt");
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user, navigate]);

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign in</h1>
      <div className="signin-button-wrapper">
      {/* <GoogleButton onClick={handleGoogleSignIn} /> */}
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>

      </div>
    </div>
  );
};

export default Signin;



