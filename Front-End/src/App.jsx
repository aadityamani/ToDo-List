import React, { useEffect, useState } from "react";
import ToDo from "./Components/ToDo";
import { baseURL } from "./Utils/constant";
import axios from "axios";
import PopUp from "./Components/PopUp";
const App = () => {

  const [toDos,setToDos] = useState([]);
  const [input,setInput] = useState("");
  const [showPopup,setShowPopup] = useState(false);
  const [popupContent,setPopupContent] = useState({});


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`${baseURL}/get`);
        setToDos(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetchData();
    
  },[]);

  const saveToDo = async () =>{
    try{
      const res = await axios.post(`${baseURL}/save`,{toDo:input});
      console.log(res.data);
      setToDos(todos=>[...todos, res.data]);
      setInput("");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="input_holder">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Add a ToDo"
          />
          <button onClick={saveToDo}>Add</button>
        </div>
        <div className="list">
          {toDos.map((item) => (
            <ToDo
              key={item._id}
              text={item.toDo}
              id={item._id}
              setToDos={setToDos}
              setShowPopup = {setShowPopup}
              setPopupContent = {setPopupContent}
            />
          ))}
        </div>
        {showPopup && <PopUp setShowPopup={setShowPopup} popupContent = {popupContent} toDos = {toDos} setToDos={setToDos}/>}
      </div>
    </main>
  );
};

export default App;
