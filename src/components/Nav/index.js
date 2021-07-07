import "./styles.css"
import { Link } from 'react-router-dom'


const Nav = () => {
  return(
    
    <div className="navbar">
    
        <div className="navbar__logo">

          <Link className="navbar__logo-text" to="/">Instituto BiomaBrasil</Link>
          

        </div>

        <div className="navbar__menu">

          <ul className="navbar__menu-ul">

            <li>
              <Link className="navbar__link" to="/equipe">Equipe</Link>
            </li>
            <li>
              <Link className="navbar__link" to="/autora">Autora</Link>
            </li>

          </ul>

        </div>


    </div>

  )


}

export default Nav
