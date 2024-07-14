import { disableBodyScroll } from 'body-scroll-lock'

const Login = () => {

    disableBodyScroll(document.querySelector('#lock-scroll'))

    return (  
        <div className="grid grid-cols-3 h-screen m-16 lock-scroll">
            <div className="col-start-2 h-3/4 bg-slate-100 rounded-lg shadow-xl p-8 flex flex-col gap-60">
                <form className="flex flex-col items-center gap-12">
                    <h2 className="text-2xl font-bold">Login</h2>

                    <div className="flex flex-col gap-8">
                        <input 
                        className="rounded-xl h-12 w-80 shadow-md p-2"
                        type='text'
                        placeholder='email address'
                        />

                        <input 
                        className="rounded-xl h-12 w-80 shadow-md p-2"
                        type="text"
                        placeholder="password"
                        />
                    </div>

                    <button className="rounded-full shadow-lg bg-blue-400 text-white font-bold w-32 h-12">LOGIN</button>
                </form>

                <button className="row-span-1 text-blue-400">Sign Up</button>
            </div>
        </div>
    );
}
 
export default Login;