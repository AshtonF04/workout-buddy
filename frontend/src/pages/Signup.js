import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (  
        <div className='h-full flex flex-col justify-center lg:items-center'>
            <div className='flex flex-col items-center lg:bg-slate-100 lg:shadow-xl lg:rounded-lg lg:h-[40rem] lg:w-1/3 lg:p-4 lg:justify-center'>
                <h2 className='text-xl font-bold mb-4'>Signup</h2>
                <form onSubmit={handleSubmit} className='flex flex-col w-full items-center gap-8 mb-12'>
                    <input
                    type='email'
                    placeholder='email address'
                    className='shadow-lg rounded-md h-12 w-4/5 border-2 border-slate-200 p-1'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    type='password'
                    placeholder='password'
                    className='shadow-lg rounded-md h-12 w-4/5 border-2 border-slate-200 p-1'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button disabled={isLoading} className='rounded-lg shadow-lg bg-blue-300 w-32 h-12 text-white font-bold'>SIGNUP</button>
                </form>
                <Link to='/login' className='text-blue-300'>Login</Link>
                {error && <div>{error}</div>}
            </div>
        </div>
    );
}
 
export default Signup;