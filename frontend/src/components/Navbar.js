import { Link, useNavigate } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return ( 
        <header className="h-12 mb-4 flex items-center justify-between">
            <div>
                <Link to='/'>
                    <h1 className="no-underline text-2xl font-bold">Workout Buddy</h1>
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                {user && <p>{user.email}</p>}
                {user && <button className="border-2 border-red-300 p-1 text-red-300" onClick={handleLogout}>Log out</button>}
                {!user && <Link to='/login'>Login</Link>}
                {!user && <Link to='/signup'>Signup</Link>}
            </div>  
        </header>
    );
}
 
export default Navbar;