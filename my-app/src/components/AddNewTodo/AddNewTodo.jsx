import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddNewTodo = () => {
    // const [taskTitle, setTaskTitle] = useState('');
    // const [taskDescription, setTaskDescription] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const newTodo = {
    //         taskTitle: taskTitle,
    //         taskDescription: taskDescription,
    //         id: uuidv4(),
    //         doneFlag: false,
    //     };

    //     handleAddPost(newTodo);
    //     setTaskTitle('');
    //     setTaskDescription('');

    // };
    // return (
    //     <>

    //         <form action="#" onSubmit={handleSubmit}>
    //             <label htmlFor="taskTitle" id="taskTitle">
    //                 Task Title
    //                 <input
    //                     type="text"
    //                     value={taskTitle}
    //                     onChange={(event) => setTitle(event.target.value)}
    //                 />
    //             </label>
    //             <p>{taskTitle}</p>

    //             <label htmlFor="taskDescription" id="taskDescription">
    //                 Task Description
    //                 <input
    //                     type="text"
    //                     value={taskDescription}
    //                     onChange={(event) => setText(event.target.value)}
    //                 />
    //             </label>
    //             <p>{taskDescription}</p>
    //             <button type="submit">Add new task</button>
    //         </form>
    //     </>
    // );
}

export default AddNewTodo;