import React from "react";

const SignInPage = () => {
  const URL = "http://localhost:5000/login/federated/facebook";
  async function signIn() {
    let response = await fetch(URL);
    let data = response.json();
  }
  return (
    <div>
      <button className="button facebook" onClick={signIn}>
        Sign in with Facebook
      </button>
    </div>
  );
};

export default SignInPage;
