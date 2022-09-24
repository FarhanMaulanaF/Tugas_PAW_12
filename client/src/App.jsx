
import {Datepicker} from "./components/form/datepicker";
import Test from "./components/form/test";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Beranda from '../src/components/User/Dashboards/Beranda'
import Transaksi from '../src/components/User/Transaksi/Transaksi'
import Private from '../src/components/User/AddForm/Private'


import './index.css';

function App () {
  return (
    < >
            <Routes>
            <Route path="/datepicker" element={<Datepicker/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/beranda" element={<Beranda/>} />
            <Route path="/transaksi" element={<Transaksi/>} />
            <Route path="/tambahtransaksi" element={<Private/>} />



      

      </Routes>
    </>
  );
}

export default App;
