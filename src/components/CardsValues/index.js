import ImgEducation from "../../assets/icon-education.png"
import ImgNature from "../../assets/icon-nature.png"
import ImgPeople from "../../assets/icon-people.png"
import "./styles.css"

const CardsValues = () => {
  return(
    

    <div className="card__values-container">
        <div className="card__values-card">
          <div className="card__values-box">
          <img className="card__values-img" src={ImgEducation} alt="imagem de professor" />
          </div>
          <div>
            <h2>Educação ambiental</h2>
          </div>
        </div>

        <div className="card__values-card">
          <div className="card__values-box">
          <img className="card__values-img" src={ImgNature} alt="imagem de planta" />
          </div>
          <div>
            <h2>Conservação do meio ambiente</h2>
          </div>
        </div>

        <div className="card__values-card">
          <div className="card__values-box">
          <img className="card__values-img" src={ImgPeople} alt="imagem de pessoas" />
          </div>
          <div>
            <h2>Equidade social</h2>
          </div>
        </div>

    </div>
  )
}

export default CardsValues