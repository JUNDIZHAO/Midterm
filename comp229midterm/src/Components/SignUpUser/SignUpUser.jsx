import './SignUpUser.css';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = watch("password");

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords provided do not match");
            return;
        }
    
        const userInfo = `
            First Name: ${data.firstName}
            Last Name: ${data.lastName}
            Username: ${data.userName}
            Email: ${data.email}
            Password: ${data.password}
        `;
    
        alert(userInfo);
        console.log(data);
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up-user-form">
            <div>
                <label>First Name:</label>
                <input {...register("firstName", { required: "First name is mandatory" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <label>Last Name:</label>
                <input {...register("lastName", { required: "Last name is mandatory" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <label>Username:</label>
                <input {...register("userName", { required: "Username is mandatory" })} />
                {errors.userName && <p>{errors.userName.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input {...register("email", { required: "Email is mandatory", pattern: { value: /^\S+@\S+$/i, message: "Email provided does not meet the format requirement." } })} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" {...register("password", { required: "Password is mandatory" })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <input type="password" {...register("confirmPassword", { required: "Password is mandatory" })} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpUser;