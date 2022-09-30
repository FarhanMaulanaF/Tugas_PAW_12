import React,{useState} from 'react'
import "./datepicker.css"

import axios from 'axios'
export  const Datepicker = () => {
  const [date,setDate] = useState();
  console.log("Date", date);
  const [formData, setFormData] = useState({
    date: "",
    title: "test",

  });
  const handleSubmits = () => {

    setFormData({date:date, title:"ASUUU"})
    
    axios
      .post(`${process.env.REACT_APP_API_URL}/addpost/632a6c125c89c1f49861b782`,
      formData
      )
      .then((res) => {
        console.log("date berhasil di simpan")
      })
      .catch((err) => {
        console.log(err);
      });
  };


  
  return (
    <div className='main'>
    <h1>Selected Date : {date}</h1>
    <input type= "date" onChange={e=>setDate(e.target.value)}/>
    <button onClick={e=>handleSubmits()}>

    </button>

</div>
  )
}

export default Datepicker