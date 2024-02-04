
import { useEffect, useState } from 'react';
import { posts } from '../../utils/posts';
import Post from '../Post/Post';
import AddNewPost from '../AddNewPost/AddNewPost';


function PostList() {
    
    const [postList, setPostList] = useState(JSON.parse(localStorage.getItem('posts')) ?? posts);
    //console.log(posts);
    const changeMarked = (id) => {
        const newPostList = postList.map(post => post.id === id ? { ...post, marked: !post.marked } : post);
        setPostList(newPostList);
    };

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(postList));
    }, [postList]);

    const handleAddPost = (post) => {
        setPostList([post, ...postList]);
    }

    return (
        <div>
            <AddNewPost handleAddPost={handleAddPost} />
            {postList.map((post) => (
                <Post key={post.id} {...post}
                    changeMarked={changeMarked}
                // title={post.title}
                // text={post.text} 
                // img={post.img}
                // marked={post.marked}
                />
            ))}
        </div>
    )
}

export default PostList;