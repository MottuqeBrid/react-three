import React, { useState } from 'react';
import style from './Form.module.css'

const Form = () => {

    // const [name, setName] = useState([]);
    // const [email, setEmail] = useState([]);
    // const [password, setPassword] = useState([]);

    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const { name, email, password } = user;

    // const handleNameChange = (e) => {
    //     setUser({ name: e.target.value, email, password });
    // }
    // const handleEmailChange = (e) => {
    //     setUser({ name, email: e.target.value, password });
    // }
    // const handlePasswordChange = (e) => {
    //     setUser({ name, email, password: e.target.value });
    // }

    const handleChange = (e) => {
        const fildName = e.target.name;
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(e.target.name);
    }

    const handleSubmit = (e) => {

        console.log('form is submitted');
        console.log(user);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        type="text"
                        name='name'
                        id='name'
                        required
                        onChange={handleChange} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email"
                        name='email'
                        id='email'
                        required
                        onChange={handleChange} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        type="password"
                        name='password'
                        id='password'
                        required
                        onChange={handleChange} />
                </div>
                <div className={style.formGroup}>
                    <button type="submit">Registration</button>
                </div>
            </form>
        </div>
    );
};

export default Form;