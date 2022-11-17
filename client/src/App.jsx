import Test from "./components/form/test";
import { Routes, Route } from "react-router-dom";
import ActivateEmail from "./page/beforeUserLogin/activateEmail";
import Login from "./page/beforeUserLogin/login";
import Register from "./page/beforeUserLogin/register";
import CreateNewPassword from "./components/beforeUserLogin/createNewPassword";
import ForgotPassword from "./components/beforeUserLogin/forgotPassword";

import Dashboard from "./components/afterUserLogin/dashboard";

import Home from "../src/page/home/home";
import Transaction from "./components/afterUserLogin/transactionpage";
import UserProfile from "./components/afterUserLogin/userprofile";
import PrivateRoute from "./routes/PrivateRoute";
<<<<<<< HEAD
import PopUpNav from "./components/afterUserLogin/popUpNav";
=======

>>>>>>> f98ccff4cd8bca25a6de64b295a441298a1df170
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/activate/:token" element={<ActivateEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users/password/reset/:token"
          element={<CreateNewPassword />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/transactions" element={<Transaction props="true" />} />

          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
