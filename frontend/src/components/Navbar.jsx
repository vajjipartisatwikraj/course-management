import {Link} from "react-router-dom";
import '../App.css';

function Navbar ({user}) {
    return <nav>
    <h2>
        My App
    </h2>

    <div className="nav-items">
        <Link to = '/' > Home </Link>
        <Link to = '/about'> About </Link>
        <Link to = '/contact'> Contact </Link>
        <Link to = '/help'> Help </Link>
    </div>
    <div className="user">
        <span>Welcome, {user.name}</span>
        <br/>
        <span>{user.email}</span>
    </div>
    </nav>
}

export default Navbar;