import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error, isLoading} = useLogin()

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (  
        <div className='h-full flex flex-col justify-center lg:items-center'>
            <div className='flex flex-col items-center lg:bg-slate-100 lg:shadow-xl lg:rounded-lg lg:h-[40rem] lg:w-1/3 lg:p-4 lg:justify-center'>
                <h2 className='text-xl font-bold mb-4'>Login</h2>
                <form className='flex flex-col w-full items-center gap-8 mb-12'>
                    <input
                    type='email'
                    placeholder='email address'
                    className='shadow-lg rounded-md h-12 w-4/5 border-2 border-slate-200 p-1'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <input
                    type='password'
                    placeholder='password'
                    className='shadow-lg rounded-md h-12 w-4/5 border-2 border-slate-200 p-1'
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <button onClick={handleLogin} className='rounded-lg shadow-lg bg-blue-300 w-32 h-12 text-white font-bold'>LOGIN</button>
                </form>
                <Link to='/signup' className='text-blue-300'>Signup</Link>
                {error && <div>{error}</div>}
            </div>
        </div>
    );
}
 
export default Login;