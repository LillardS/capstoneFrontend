import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';

const Navbar = () => {

    // set the user to the authContext user
    const { user } = useAuthContext();

    // set the log out function to useLogout hook
    const { logout } = useLogout();

    // on click call the log out function
    const handleClick = () => {
        logout();
    }
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Menu id='navbar' className='navbar-menu'>
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
            {/* if there is a user logged in, display their username and the log out button on the navbar */}
            {user && (
                <div className='logout'>
                    <span className='username'>{user.email}</span>
                    <button onClick={handleClick}>Log Out</button>
                </div>
            )}

            {/* if there is not a user logged in, display the login and signup buttons on the navbar */}
            {!user && (
                <div className='user'>
                    <Link to="/user/Login">Login</Link>
                    <Link to="/user/Signup">Signup</Link>
                </div>
            )}
        </Menu>
    )
}

export default Navbar;