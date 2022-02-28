import React from "react";
import { useNavigate, } from "react-router-dom";
const styles = {
    login: {
        width: '100vw',
        height: '100vh',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
function LoginForm() {
    const navigate = useNavigate()
    const handleSubmit = ({target:{value}}) => {
        localStorage.setItem('user', true)
        navigate('/')
    }
    return <div style={styles.login} className='login'>
        登录
        <form
            onSubmit={handleSubmit}
        >
            <input type="text" name="username" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type='submit' />
        </form>
    </div>
}

export default LoginForm