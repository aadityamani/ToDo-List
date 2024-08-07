import React, { useEffect } from 'react'
import { AiFillEdit} from "react-icons/ai";
import { RxCross1} from "react-icons/rx";
import axios from 'axios';
import { baseURL } from '../Utils/constant';

const ToDo = ({text,id,setToDos,setShowPopup,setPopupContent}) => {

    const updatePopup = ()=>{
        setPopupContent({text,id});
       setShowPopup(true);
    }

    const deleteToDo = () => {
        try{
            const res = axios.delete(`${baseURL}/delete/${id}`);
            console.log(res.data);
            setToDos(toDos=>{
                return toDos.filter(item=>item._id!==id)
            })
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='toDo'>{text}
        <div className="icons">
        <AiFillEdit className='icon' onClick={updatePopup} />
        <RxCross1 className='icon' onClick = {deleteToDo} />
        </div></div>
  )
}

export default ToDo;