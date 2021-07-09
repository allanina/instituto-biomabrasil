import Img from "../../assets/image-action-4.jpg"
import "./styles.css"

const Cards = () => {
  return(
    
    <div className="card__content">

        <img className="card__content-img"src={Img} alt ="imagem pessoas em um manguezal" />

        <p className="card__content-text">O Instituto BiomaBrasil foi estabelecido sobre a premissa de que a educação constitui o combustível para a mudança. O desenvolvimento de suas atividades tem demonstrado a potencialidade necessária à conservação das zonas úmidas quando mentes abertas estão decididas a investir nas necessidades sociais, numa atmosfera de respeito e trabalho em equipe, imbuídas de responsabilidade social. </p>



    </div>


  )
}

export default Cards