
import {Datepicker} from "./components/form/datepicker";
import Test from "./components/form/test";
import { Routes, Route } from "react-router-dom";
import ActivateEmail from "./page/beforeUserLogin/activateEmail";
import Login from "./page/beforeUserLogin/login";
import Register from "./page/beforeUserLogin/register"
import CreateNewPassword from "./components/beforeUserLogin/createNewPassword";
import ForgotPassword from "./components/beforeUserLogin/forgotPassword";
import Beranda from '../src/components/User/Dashboards/Beranda'
import Dashboard from "./components/afterUserLogin/dashboard";
import Transaksi from '../src/components/User/Transaksi/Transaksi'
import Private from '../src/components/User/AddForm/Private'
import Home from '../src/page/home/home'
import Transaction from "./components/afterUserLogin/transactionpage"


import './index.css';

function App () {
  return (
  < >
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/datepicker" element={<Datepicker/>} />
      <Route path="/activate-email/:token" element={<ActivateEmail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/create-new-password" element={<CreateNewPassword/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/transaction" element={<Transaction/>} />
      <Route path="/beranda" element={<Beranda/>} />
      <Route path="/transaksi" element={<Transaksi/>} />
      <Route path="/tambahtransaksi" element={<Private/>} />
    </Routes>
  </>
  );
}

export default App;
