import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/sign-in.page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage></SignInPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
