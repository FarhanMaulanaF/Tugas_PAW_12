import { useState } from "react";
import BarChart from "../componentChart/BarChart";
import { UserData } from "../../dummyData/Data.js";

const BarData = ({ pemasukan, pengeluaran }) => {
  console.log(pengeluaran, pemasukan);
  const [userData, setUserData] = useState({
    labels: ["Pemasukkan", "Pengeluaran"],
    datasets: [
      {
        label: 'Pemasukkan',
        data: [parseInt(pemasukan), parseInt(pengeluaran)],
        backgroundColor: ["#425C81", "#C9341C"],
      },
      {
        label: 'Pengeluaran',
        backgroundColor: "#C9341C"
      }
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="w-full">
      <BarChart chartData={userData} />
    </div>
  );
};
export default BarData;
