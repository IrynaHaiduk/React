
import './App.css';
import {AboutMe} from './components/AboutMe/AboutMe';
import Post from './components/Post/Post';
import Todo from './components/Todo/Todo';
import PostList from './components/PostList/PostList';
import TodoList from './components/TodoList/TodoList';
import ChangeColor from './components/ChangeColor/ChangeColor';
import Counter from './components/Counter/Counter';
import Effect from './components/Effect/Effect';
import UserList from './components/UserList/UserList';
import SingleUser from './components/SingleUser/SingleUser';
import Userspage from './pages/UsersPage';


function App() {

  // const firstPost = {
  //   title: 'First Post',
  //   description: 'Lorem lorem',
  //   marked: true,
  //   image: 'https://via.placeholder.com/600/92c952',
  // };

  return (
    <>
      {/* <div className="App">
        <h1>Hello world!</h1>     
      </div> 
       <p></p> 
       <AboutMe/>
       <Post  title={firstPost.title} 
       description={firstPost.description}
        marked={firstPost.marked}/>
       <Post title = "Second Post" description="This post is about me" marked='true'/>
       <Post {...firstPost}/>
       <Todo taskTitle="Do homework" taskDescription ="Task 1, 2, 3" doneFlg/>
       <Todo taskTitle="Go to the park" taskDescription ="At 3 pm" /> */}
       <Userspage/>
       {/* <SingleUser />
       <UserList />
       <Effect/>
       <PostList />
       <TodoList />
       <ChangeColor />
       <Counter/> */}
    </>

  );
}

export default App;
