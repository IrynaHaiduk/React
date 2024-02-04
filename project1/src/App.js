import './App.scss';
import { useState } from 'react';
import LessText from './components/LessText';


const data = [
  {
  
  "id": 1,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": " quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
  
  "id": 2,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": " quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoquia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
  
  "id": 3,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
  
  "id": 4,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
  
  "id": 5,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
  
  "id": 6,
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg",
  "title": "dolorem eum magni eos aperiam quia",
  "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
];

function App() {
let [posts, setPosts] = useState(data);
let [postForm, setPostForm] = useState({
  title: "", 
  body: "", 
  image: ""
});

const handlerInputChange = (event) => {
  console.log(event.target.name, event.target.value);
  //console.log(...postForm, event.target.value);
  setPostForm(prevState => ({...prevState, [event.target.name]: event.target.value}));
  console.log(postForm);
}

const handlerAddPost = () => {
  let data = [...posts];

  data.push(postForm)

  setPosts(data);
}


  return (
    <main>
      <div className='container'>
      <section className="form">
            <div className="form__item">
              <label>Post title</label>
              <input name="title" type="text" onChange={handlerInputChange}/>
            </div>
            <div className="form__item">
              <label>Post Image</label>
              <input name="image" type="text" onChange={handlerInputChange}/>
            </div>
            <div className="form__item">
              <label>Post description</label>
              <textarea name="body" onChange={handlerInputChange}/>
            </div>
            <button onClick={handlerAddPost}>ADD POST</button>
        </section>
      <section className='posts'>
        {
          posts && posts.map(({id, title, body, image}) => {
            return (
              <article key={id + title} className='postItem'>
                <img src={image} alt={title}/>
                <div>
                <h2>{title}</h2>
                <LessText text={body} maxLengthText={300}/>
                </div>
              </article>
            )
          })
        }
      </section>
     </div>
     </main>
   
  )
}



export default App;

// function App() {

//   let [users, setUsers] = useState([
//   {
//     id: 1,
//     name: 'John'
//   },
//   {
//     id: 2,
//     name: 'Bob'
//   }
// ]);

//   return (
//     <div>
//      <h1>App component</h1>
//      <AppChildComponent data={users} say ="Hello!"/>
//     </div>
//   );
// }

// const AppChildComponent = ({say, data}) => {
//   //let {data, say} = props;
//   console.log(say, data[0].id);
//   return (
//     <div>
//      <h2>{say}</h2>
//      <ul>
//       {
//         data && data.map(user => <li key={user.id + user.name}>
//           {user.name}
//         </li>)
//       }
//      </ul>
     
//     </div>
//   );
// }

// function App() {
//   let arr = useState("");
//   console.log(arr);
//     //let [value, setValue] = useState(0);
//     let state = arr[0];
//     let setState = arr[1];
  
//     return (
//       <div>
//         <input type="text" onChange={(event) => {
//           setState(event.target.value); 
//         }}/>
//         <h1>{state}</h1>
//       </div>
//     );
//   }
