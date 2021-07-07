import Img from "../../assets/manguezais-cover.png"
import "./styles.css"

const CardsMangue = () => {
  return(
    <div className="card__mangue__content">

        <p className="card__mangue__content-text"> O Guia Didático é uma poderosa ferramenta de auxílio à formação de educadores, monitores ambientais e gestores de unidades de conservação, dedicado à conservação dos manguezais.De forma contextualizada, cada capítulo intercala questões conceituais com atividades práticas, adotando materiais de baixo custo (palitos, canudos, garrafas, barbante, entre outros). São 42 atividades propostas sobre temas variados: ciclo da água; funções do ecossistema; caracterização das espécies vegetais; derrame e limpeza de óleo; teia alimentar; metais pesados; simulação de audiência pública, entre outros. </p>

        <img className="card__mangue__content-img"src={Img} alt ="imagem de um carangueijo" />



    </div>
  )
}

export default CardsMangue