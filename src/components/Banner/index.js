import React from 'react'
import Img from '../../assets/logo-instituto.png'
import "./styles.css"


const Banner = () => {
    return(

      <div className="div__content__banner">

        <div className="home__content__text">

          <h1>Para o Instituto BiomaBrasil, a educação é o combustível para a mudança</h1>

          <p>Conservação, educação ambiental e igualdade.</p>
          
          <a href="#content" className="button__home">Saiba mais</a>

        </div>

        <div className="home__content__image">

          <img src={Img} alt="logotipo do Instituto BiomaBrasil" />
          
        </div>

      </div>
    )

}

export default Banner