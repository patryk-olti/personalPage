import React from "react";

import '../styles/Login.css';

const Login = () => {

    return(
        <div className='login__container'>
            <div className='login__box'> 
                <form className='login__form'>
                    <label>
                        login: 
                        <input></input>
                    </label>

                    <label>
                        login: 
                        <input></input>
                    </label>

                    <button>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;