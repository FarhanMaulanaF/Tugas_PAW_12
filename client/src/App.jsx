
import {Datepicker} from "./components/form/datepicker";
import Test from "./components/form/test";
import { Routes, Route } from "react-router-dom";
function App () {
  return (
    < >
            <Routes>
            <Route path="/datepicker" element={<Datepicker/>} />

      

      </Routes>
    </>
  );
}

export default App;
