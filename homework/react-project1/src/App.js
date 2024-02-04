import './App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
  const {
    register,
    // подписывается на инпут  и при сабмите формы данные отправляет в обработчик
    handleSubmit,//e.preventDefault()
    reset,
    getValues,
    watch,
    isValid,
    formState: { errors, defaultValues, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const handleUserSubmit = (data) => {
    //handleAddUser(data);

    reset();
  };

  const API_URL = 'https://restcountries.com/v3.1/all';
  const [countryList, setCountryList] = useState([]);

  const getInfo = async () => {
    try {
      const response = await fetch(`${API_URL}`);

      if (!response.ok) {
        throw new Error('Data is not found!');
      }
      const result = await response.json();

      const nameArr = [];

      result.forEach((element) => {
        //countryList.push(element['name']['common']);
        nameArr.push(element['name']['common']);
        // console.log(element['name']['common']);
        //setCountryList(...countryList, element['name']['common']); //doesn't work
      });

      console.log(nameArr);
      setCountryList(countryList.concat(nameArr));
      console.log(countryList);

      //setCountryList([...countryListList, userResponse]);
      //console.log(name);
    } catch (error) {
      throw new Error('Data is not found!');
    }

  }

  getInfo();
  console.log(countryList);

  return (
    <div className="App">
      <main>
        <form onSubmit={handleSubmit(handleUserSubmit)} action="#">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              id="firstName"
              {...register('firstName',
                {
                  required: "This field is required!",
                  pattern: {
                    value: /[a-z]/gi,
                    message: "You should enter only latin characters!"
                  },
                })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.firstName?.message}</p>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              {...register('lastName',
                {
                  required: "This field is required!",
                  pattern: {
                    value: /[a-z]/gi,
                    message: "You should enter only latin characters!"
                  },
                  minLength: { value: 4, message: "Lastname should be longer than 4 symbols" },
                })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.lastName?.message}</p>

          <label htmlFor="companyName">
            Company Name (Optional)
            <input
              type="text"
              id="companyName"
              {...register('companyName')}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.companyName?.message}</p>

          <label htmlFor="country">
            Country / Region
            <select
              name="country"
              id="country"
              {...register('country',
                {
                  required: "This field is required!",
                })}
            >

              {countryList.map((country) => (
                <option value={country} key={Date.now()}>{country}</option>

              ))} 

            </select>
          </label>
          <p style={{ color: 'red' }}>{errors.country?.message}</p>

          <label htmlFor="street">
            Street address
            <input
              type="text"
              id="street"
              {...register('street',
                {
                  required: "This field is required!",
                })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.street?.message}</p>

          <label htmlFor="town">
            Town / City
            <input
              type="text"
              id="town"
              {...register('town',
                {
                  required: "This field is required!",
                  pattern: {
                    value: /[a-z]/gi,
                    message: "You should enter only latin characters!"
                  },
                })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.town?.message}</p>

          <label htmlFor="province">
            Province
            <select
              name="province"
              id="province"
              {...register('province',
                {
                  required: "This field is required!",
                })}
            >
              <option value="">Please choose an option</option>
              <option value="dog">Western Province</option>
              <option value="cat">Sri Lanka</option>
              <option value="hamster">Sri Lanka</option>
              <option value="parrot">Sri Lanka</option>
              <option value="spider">Sri Lanka</option>
              <option value="goldfish">Sri Lanka</option>
            </select>
          </label>
          <p style={{ color: 'red' }}>{errors.province?.message}</p>

          <label htmlFor="zipCode">
            ZIP code
            <input
              type="text"
              id="zipCode"
              {...register('zipCode', {
                required: "This field is required!",
                pattern: {
                  value: /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/,
                  message: "You should enter German ZIP code!"
                },
              })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.zipCode?.message}</p>

          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'This field is required!',
                pattern: {
                  value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                  message: 'You should enter German number started with +49',
                },
              })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.phone?.message}</p>

          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'This field is required!',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Email is incorrect!',
                },
              })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.email?.message}</p>

          <label htmlFor="addInfo">
            <input
              type="text"
              id="addInfo"
              placeholder='Additional information'
              {...register('addInfo', {
                required: "This field is required!",
              })}
            />
          </label>
          <p style={{ color: 'red' }}>{errors.addInfo?.message}</p>

          <button type="submit" disabled={isValid}>
            Place order
          </button>

        </form>
      </main>
    </div>
  );
}

export default App;
