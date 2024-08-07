import ToDoModel from "../models/ToDoModel.js";

export const getToDos = async (req,res) => {
    const toDos = await ToDoModel.find();
    res.send(toDos)
}
export const saveToDo = async (req,res) => {
    try
    {
        const {toDo} = req.body
        console.log(toDo);
        
        if(toDo===""){
            return res.status(400).send({
                msg: "Empty String"
            });
        }
        const newTodo = await ToDoModel.create({toDo}); 
        res.status(200).send(newTodo);
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            error: err, msg: "Something went wrong while saving!"
        });
    }
}
export const updateToDo = async (req,res) => {
    try
    {
        const {id} = req.params;
        const {toDo} = req.body;
        console.log(toDo);
        const updtoDo = await ToDoModel.findByIdAndUpdate(id,{toDo});
        console.log({toDo});
        res.send("Updated Successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            error: err, msg: "Something went wrong while updating!"
        });
    }
}
export const deleteToDo = async (req,res) => {
    try
    {
        const{id} = req.params;
        const deltoDo = await ToDoModel.findByIdAndDelete(id);
        res.send("Deleted Successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            error: err, msg: "Something went wrong while deleting!"
        });
    }
}