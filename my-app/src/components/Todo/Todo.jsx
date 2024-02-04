const Todo = ({ taskTitle, taskDescription, doneFlag, id,  changeDoneFlag}) => {
    return (
        <>
        <div style={{ color: doneFlag ? 'grey' : '', textDecoration: doneFlag ? 'line-through' : '' }}>
            <h1>{taskTitle}</h1>
            <p>{taskDescription}</p>
           <button onClick={() => changeDoneFlag(id)}>Change state</button>  
        </div>
       
        </>
    );
}

export default Todo;

// Создать компонент Todo. Внутри него должны быть переменные taskTitle, taskDescripttion, 
// doneFlag со значениями заголовка дела, описания и булевого значения сделано дело или нет. 
// Отобразите taskTitle и taskDescripttion и если doneFlag равно true, то заголовок и текст 
// должны стать серого цвета и быть зачеркнутыми.



