import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {

    // set the user to the authContext user
    const { user } = useAuthContext();

    // set the log out function to useLogout hook
    const { logout } = useLogout();

    // on click call the log out function
    const handleClick = () => {
        logout();
    }

    return (
        <header>
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
            <div className='user-display'>
                <nav>
                    {user && (
                        <div className='logout'>
                            <span className='username'>{user.email}</span>
                            <button onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                    {!user && (
                        <div className='user'>
                            <Link to="/user/Login">Login</Link>
                            <Link to="/user/Signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;