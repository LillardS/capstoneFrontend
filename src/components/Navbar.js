import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div id="top" className="container">
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
                <Link to="/Contacts">
                    <h1>Contacts</h1>
                </Link>
                <nav>
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