import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import Birds from "./pages/Birds";
import { Accessories } from "./pages/Accessories";

import { AuthProvider } from "./auths/AuthContext";
import { ForgotPassword } from "./components/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
