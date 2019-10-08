import React from 'react';
import LoginInput from 'src/components/LoginInput'
const Login = (props) => {
    // const LoginInputRef = React.createRef()
    const LoginInputRef = React.createRef()
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <LoginInput ref={LoginInputRef} />
                <button className='ui button yellow' onClick={() => props.login()}>Login</button>
                <button className='ui button red' onClick={() => {
                    LoginInputRef.current.clearText()
                }
                }>Clear</button>

            </div>

        </div>
    );
}

export default Login;