import { useNavigate } from 'react-router-dom'; // Import navigation

const Signin = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      navigate('/dashboard'); // ✅ Redirect after login
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};