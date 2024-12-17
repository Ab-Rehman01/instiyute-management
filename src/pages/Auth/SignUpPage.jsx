// src/pages/Auth/SignInPage.jsx
import React from 'react';
//import { useClerk, RedirectToSignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <button onClick={() => openSignIn()}>Sign In with Google</button>
      <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
    </div>
  );
};

export default SignInPage;
