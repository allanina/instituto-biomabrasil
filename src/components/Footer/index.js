import "./styles.css"
import Img from '../../assets/logo-instituto.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(

    <footer className="footer__menu">
      
      <div className="footer__div">

        <div className="footer__logo">

          <img className="footer__logo-img" src={Img} alt="logotipo do Instituto BiomaBrasil" />
        </div>
        

          <ul>

            <li>
              <Link className="footer__menu-link" to="/equipe">Equipe</Link>

            </li>

            <li>
              <Link className="footer__menu-link" to="/autora">Autora</Link>
            </li>

          </ul>

        

      </div>

    </footer>
  )
}

export default Footer