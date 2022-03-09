import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="bg-light">
            <nav className="container d-flex align-items-center p-3">
              <div className="container-fluid">
                <NavLink activeclassname='active' to='/' className='m-2'>Home</NavLink>
                <NavLink activeclassname='active' to='/buses' className='m-2'>All Buses</NavLink>
              </div>
            </nav>
        </header>
    );
}
 
export default NavBar;