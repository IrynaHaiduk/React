//import { useState } from "react";
import { useForm } from 'react-hook-form';

const AddUser = ({ handleAddUser }) => {
    const {
        register,
        // подписывается на инпут  и при сабмите формы данные отправляет в обработчик
        handleSubmit,//e.preventDefault()
        reset,
        getValues,
        watch,
        isValid,
        formState: { errors, defaultValues, isSubmitSuccessful, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: '',
            age: '',
            email: '',

        }
    });

    const handleUserSubmit = (data) => {

        handleAddUser(data);
        reset();

    };
    console.log(getValues('Password'));

    console.log(watch );
    return (
        <form onSubmit={handleSubmit(handleUserSubmit)}>
            <label htmlFor="firstName">
                First Name
                <input
                    type="text"
                    id="firstName"
                    {...register('firstName',
                        {
                            required: "This field is required!",
                            minLength: { value: 4, message: "Name should be longer tan 4 symbols" },
                        })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.firstName?.message}</p> {/* do we have firstName? */}
            <label htmlFor="age">
                Age
                <input
                    type="number"
                    id="age"
                    {...register('age',
                        {
                            required: { value: true, message: "This field is required!" },
                            min: { value: 18, message: "User should be older than 18 years" },
                            max: { value: 120, message: "User should be younger than 120 years" },
                        })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.age?.message}</p> {/* do we have age? */}
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    id="email"
                    {...register('email',
                        {
                            required: { value: true, message: "This field is required!" },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Email is incorrect, add dot and domen"
                            }
                        })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.email?.message}</p> {/* do we have age? */}
            <label htmlFor="phone">
                Phone
                <input
                    type="tel"
                    id="phone"
                    {...register('phone',
                        {
                            required: { value: true, message: "This field is required!" },
                            pattern: {
                              
                                value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                                message: "You should enter German number started with +49"
                            },
                            maxLength: { value: 11, message: "Phone shouldn't be longer than 11 symbols" },
                            minLength: { value: 6, message: "Phone shouldn't be smaller than 6 symbols" },//optional
                        })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.phone?.message}</p> {/* do we have phone? */}

            <label htmlFor="Password">
                Password
                <input
                    id="Password"
                    type="password"
                    {...register('Password', {
                        required: 'This field is required!',
                        min: { value: 4, message: 'The password must be at least 8 characters' },
                    })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.password?.message}</p>

            <label htmlFor="Confirm-Password">
                Confirm Password
                <input
                    id="Confirm-Password"
                    type="password"
                    {...register('ConfirmPassword', {
                        required: 'This field is required!',
                        validate: (value) => value === getValues('Password') || "You have to confirm password",
                    })}
                />
            </label>
            <p style={{ color: 'red' }}>{errors.ConfirmPassword?.message}</p>

            <button type="submit" disabled={isValid}>
                Add New User
            </button>
            <p>{isSubmitSuccessful && 'Your data are sent succesfully!'}</p>


        </form>);
}

export default AddUser;




