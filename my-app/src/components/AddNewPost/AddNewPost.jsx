import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const AddNewPost = ({ handleAddPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title: title,
            text: text,
            id: uuidv4(),
            marked: false,
            img: 'https://placehold.co/200x200/orange/white',
        };

        handleAddPost(newPost);
        setTitle('');
        setText('');

    };

    return (<form action="#" onSubmit={handleSubmit}>
        <label htmlFor="title" id="title">
            Title
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </label>
        <p>{title}</p>

        <label htmlFor="text" id="text">
            Text
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
        </label>
        <p>{text}</p>
        <button type="submit">Add new post</button>
    </form>);
}

export default AddNewPost;