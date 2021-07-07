import Img from "../../assets/crab-img.png"
import "./styles.css"

const Cards = () => {
  return(
    
    <div className="card__content">

        <img className="card__content-img"src={Img} alt ="imagem de um carangueijo" />

        <p className="card__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus. Ante in nibh mauris cursus mattis molestie a. Platea dictumst vestibulum rhoncus est pellentesque elit. Lacus sed turpis tincidunt id aliquet risus. Sed sed risus pretium quam vulputate dignissim suspendisse in est. </p>



    </div>


  )
}

export default Cards