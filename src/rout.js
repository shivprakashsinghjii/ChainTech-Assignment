import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./login";
import Account from "./account";
import Error404 from "./error404";

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Rout;
