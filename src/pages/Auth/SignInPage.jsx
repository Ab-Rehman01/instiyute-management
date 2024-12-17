// src/pages/Auth/SignUpPage.jsx
import React from 'react';
//import { useClerk, RedirectToSignIn } from '@clerk/clerk-react';

const SignUpPage = () => {
  const { openSignUp } = useClerk();

  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <button onClick={() => openSignUp()}>Sign Up with Google</button>
      <p>Already have an account? <a href="/sign-in">Sign In</a></p>
    </div>
  );
};

export default SignUpPage;
