import React from 'react'
import Img from '../../assets/logo-instituto.png'
import "./styles.css"


const Banner = () => {
    return(

      <div id="div__content__banner" className="div__content__banner">

        <div className="banner__content__text">

          <h1>Para o Instituto BiomaBrasil, a educação é o combustível para a mudança</h1>

          <p>Educação ambiental, conservação,  e equidade.</p>
          
          <a href="#content" className="button__home">Saiba mais</a>

        </div>

        <div className="banner__content__image">

          <img className="banner__image" src={Img} alt="logotipo do Instituto BiomaBrasil" />
          
        </div>

      </div>
    )

}

export default Banner