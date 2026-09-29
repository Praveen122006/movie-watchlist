import { NavLink } from 'react-router-dom';

export default function Navbar(){
 const linkClass=({isActive})=>isActive?'nav-link active':'nav-link';
 return <header className="navbar"><div className="nav-inner"><NavLink to="/" className="brand">🎬 <span>Movie Watchlist</span></NavLink><nav><NavLink to="/" className={linkClass}>Dashboard</NavLink><NavLink to="/watchlist" className={linkClass}>My Watchlist</NavLink><NavLink to="/add" className={linkClass}>Add Movie</NavLink></nav></div></header>
}
