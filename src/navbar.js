import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Crazy ASS Blog</h1>
            <div className="linksname">
                <Link to="/">Home</Link>
                <br />
                <Link to="/create">Create one</Link>
            </div>

        </nav>
    );
}
 
export default Navbar;