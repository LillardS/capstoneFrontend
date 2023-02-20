import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {

    // set the log out function to useLogout hook
    const { logout } = useLogout();

    // on click call the log out function
    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div id="top" className="container">
                <div className='nav'>
                    <Link to="/Home">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/Places">
                        <h1>Places To Visit</h1>
                    </Link>
                    <Link to="/Activities">
                        <h1>Activities To Do</h1>
                    </Link>
                    <Link to="/About">
                        <h1>About</h1>
                    </Link>
                    <Link className='contactsLink' to="/Contacts">
                        <h1>Contacts</h1>
                    </Link>
                </div>
                <nav>
                    <div className='logout'>
                        <button onClick={handleClick}>Log Out</button>
                    </div>
                    <div className='user'>
                        <Link to="/user/Login">Login</Link>
                        <Link to="/user/Signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;