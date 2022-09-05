import './Header.css'
import { GiComputerFan } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-nav'>
        <div className='container'>
          
          <Link to='/' id='nav-logo'> 
            <div className="logotype">
                <GiComputerFan className="icon-logo"/>
                <h1>Logo</h1>
            </div>
          </Link>

          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>

        </div>
    </header>
  )
}

export default Header