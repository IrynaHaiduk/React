import Todo from "../Todo/Todo";
import {todos} from '../../utils/todos';
import { useState } from "react";
import AddNewTodo from '../AddNewTodo/AddNewTodo';


function TodoList() {
    //const [todoList, setTodoList] = useState(todos);
    
    // const  changeDoneFlag = (id) => {
    //     const newTodoList = todoList.map(todo => {
    //         return todo.id === id ? {...todo, doneFlag: !todo.doneFlag} : todo;
    //     });
    //     setTodoList(newTodoList);
    // };

    return (  
        <div>
            {/* <AddNewTodo />
            {todoList.map((todo) => (
               <Todo key={todo.id} {...todo} changeDoneFlag={changeDoneFlag} /> 
            ))} */}
        </div>
    );
}

export default TodoList;



