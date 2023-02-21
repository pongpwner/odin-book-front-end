import React from "react";

const SignInPage = () => {
  const URL = "http://localhost:3000/auth/login/federated/facebook";
  async function signIn() {
    console.log("signIn");
    // let response = await fetch(URL);
    // let data = response.json()
    window.open(URL, "_self");

    //console.log(data);
  }
  return (
    <div>
      <button className="button facebook" onClick={signIn}>
        Sign in with Facebook
      </button>
      <a
        className="button facebook"
        href="http://localhost:3000/auth/login/federated/facebook"
      >
        Sign in with Facebook
      </a>
    </div>
  );
};

export default SignInPage;
