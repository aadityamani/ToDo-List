import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx"; 
import { baseURL } from "../Utils/constant";

const PopUp = ({setShowPopup,popupContent,toDos, setToDos}) => {

    const [input,setInput] = useState(popupContent.text);

    const updateTodo = async () =>{
        try {
            const res = await axios.put(`${baseURL}/update/${popupContent.id}`,{toDo:input});
            const updatedTodos = toDos.map((item) =>{
                if(item._id===popupContent.id){
                    return {...item, toDo: input};
                }
                return item;
            })
            console.log(res)
            setToDos(updatedTodos);
            setShowPopup(false);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={()=>setShowPopup(false)}/>
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Update ToDo"
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;