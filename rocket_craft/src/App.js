import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCraftKsp1 from "./pages/AllCraftKsp1";
import AllCraftKsp2 from "./pages/AllCraftKsp2";
import Error from "./pages/Error";
import Auth from './pages/Auth';
import { UserContextProvider } from "./context/userContext";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Upload from "./pages/Upload";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

const App = () => {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/ksp1" element={<AllCraftKsp1 />} />
        <Route path="/ksp2" element={<AllCraftKsp2 />} />
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />}></Route>
        </Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;