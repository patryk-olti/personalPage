import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

import '../styles/Login.css';

const Login = () => {

    const [ inputLogin, setLogin ] = useState("");
    const [ inputPassword, setPassword ] = useState("");
    const [ clicked, setClicked ] = useState(false);

    const { toggleIsLogged } = useContext( AppContext );

    const handleSubmit = (e) => {
        e.preventDefault();

        const defaultLogin = 'patryk';
        const defaultPass = 'olti';

        if(inputLogin === defaultLogin && inputPassword === defaultPass){
            setClicked(false)
        }else{ setClicked(true)}

        setLogin('');
        setPassword('');
    }

    return(
        <div className='login__container'>
            <div className='login__box'> 
                <form className='login__form' onSubmit={ handleSubmit }>
                    <label>
                        <span>login:</span>
                        <input
                            name='login'
                            placeholder='login'
                            type="text"
                            value={ inputLogin }
                            onChange={ e => setLogin(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>password:</span>
                        <input
                            name='password'
                            placeholder='password'
                            type='password'
                            value={ inputPassword }
                            onChange={ e => setPassword(e.target.value)}
                        />
                    </label>
                    <div className="login__error"> {clicked ? `błędny login lub hasło` : null} </div>
                    <button onSubmit={handleSubmit}>zaloguj</button>
                </form>
                <div className='login__exit'><button onClick={toggleIsLogged}>X</button></div>
            </div>
        </div>
    )
}

export default Login;