import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="h-12 mb-4 flex items-center font-bold">
            <Link to='/'>
                <h1 className="no-underline text-2xl">Workout Buddy</h1>
            </Link>
        </header>
    );
}
 
export default Navbar;