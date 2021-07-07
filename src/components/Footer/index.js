import "./styles.css"
import Img from '../../assets/logo-instituto.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(

    <footer>
      
        <div className="footer__logo">

          <img className="footer__logo-img" src={Img} alt="logotipo do Instituto BiomaBrasil" />
        </div>
        

    <div className="footer__links">
          <p><Link className="footer__menu-link" to="/equipe">Equipe</Link> </p>


          <p><Link className="footer__menu-link" to="/autora">Autora</Link></p>
    </div>

  </footer>
  )
}

export default Footer