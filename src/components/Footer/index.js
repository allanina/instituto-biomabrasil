import "./styles.css"
import ImgLogo from '../../assets/logo-instituto.png'
import ImgInsta from '../../assets/icon-instagram.png'
import ImgFacebook from '../../assets/icon-facebook.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  return(
  <>
    <footer>
      
        <div className="footer__logo">

          <img className="footer__logo-img" src={ImgLogo} alt="logotipo do Instituto BiomaBrasil" />

        </div>
        

        <div className="footer__links">
          
          <p><Link className="footer__menu-link" to="/equipe">Equipe</Link> </p>

          <p><Link className="footer__menu-link" to="/autora">Autora</Link></p>

        </div>

        <div className="footer__social__media">

          <a href="https://www.instagram.com/instituto_biomabrasil/" target="_blank" rel="noreferrer">
            <img className="footer__social__media-img" src={ImgInsta} alt="logotipo instagram na cor branca" /> 
          </a>

          <a href="https://www.facebook.com/institutobiomabrasil/" target="_blank" rel="noreferrer">
            <img className="footer__social__media-img" src={ImgFacebook} alt="logotipo facebook na cor branca" />
          </a>

        </div>
  
      
      
  </footer>
  
  <div className="footer__credits">
    <a href="https://github.com/allanina" target="_blank" rel="noreferrer" className="footer__credits">Desenvolvido por © Allana Evellyn </a>
  </div>
  
  </>
  )
}

export default Footer