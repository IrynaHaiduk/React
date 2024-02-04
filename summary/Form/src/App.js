
import { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const API_URL = 'https://jsonplaceholder.typicode.com';

function App() {

  const { register, handleSubmit, formState: errors, reset, setValue } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    //setUsers([...users, { ...data, id: Date.now() }]);
    //reset();
    //resetCustom(data);


    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => setUsers([...users, data]))

    reset();
  }

  const resetCustom = (data) => {
    for (const key in data) {
      setValue(key, '');
    }
  }

  function handleUserRemove(id) {
    //const newUserArr = users.filter((user) => user.id !== id);
    //setUsers(newUserArr);
    fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        console.log('User was deleted');
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.log('User was not deleted');
      }
    }
    )
  }

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
        className='form'>
        <div className="form__item">
          <label htmlFor='name'>
            Name
          </label>
          <input
            className='form__item'
            type="text"
            id="name"
            {...register('name', { required: "Name is required" })}
          />
          {errors.name && <p className='text-error'>{errors.name.message}</p>}
        </div>
        <div className="form__item">
          <label htmlFor='username'>
            Lastname
          </label>
          <input
            className='form__item'
            type="text"
            id="username"
            {...register('username', { required: "username is required" })}
          />
          {errors.username && <p className='text-error'>{errors.username.message}</p>}
        </div>
        <div className="form__item">
          <label htmlFor='email'>
            Email
          </label>
          <input
            className='form__item'
            type="email"
            id="email"
            {...register('email', {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email is incorrect"
              }
            },
            )}
          />
          {errors.email && (<p className='text-error'>{errors.email.message}</p>)}
        </div>
        <div className="form__item">
          <label htmlFor='phone'>
            Phone
          </label>
          <input
            className='form__item'
            type="text"
            id="phone"
            {...register('phone', { required: "phone is required" })}
          />
          {errors.phone && <p className='text-error'>{errors.phone.message}</p>}
        </div>


        <button type="Submit" className='btn'>Send</button>
      </form>
      <main>
        {users && users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (

                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className='btn btn-delete'
                      onClick={() => handleUserRemove(user.id)}
                    >Delete</button>
                  </td>
                </tr>

              ))}
            </tbody>


          </table>
        )
        }
      </main>

    </>
  );
}

export default App;
