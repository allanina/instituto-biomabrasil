import "./styles.css"
import Img from "../../assets/autor-profile.jpg"
import ImgLinkedin from "../../assets/icon-linkedin-blue.png"
import ImgGithub from "../../assets/icon-github-blue.png"
import ImgInsta from "../../assets/icon-instagram-blue.png"

const ContentAutor = () =>{
  return(
    <article className="autor__content">
      <h1 className="autor__content-title">Autora</h1>

      <img className="card__content-img"src={Img} alt ="imagem da autora" />

      <h2 className="autor__content-name">Allana Evellyn</h2>

      <p className="autor__content-text">
      Allana é bióloga e especialista em Gestão Ambiental, mas atualmente é estudante de Análise e Desenvolvimento de Sistemas no IFPE. Se formou na turma 10 de Desenvolvimento Front-end da Reprograma e está estudando para ser uma Desenvolvedora Front-end. Nas horas vagas, adora mimar seus 12 gatos e 2 cachorros, ler, asssistir filmes, descobrir músicas novas e passar raiva no low elo do Valorant.
      </p>

      <div className="content__social__media">

        <a href="https://www.instagram.com/allanina__/" target="_blank" rel="noreferrer">
          <img className="content__social__media-img" src={ImgInsta} alt="logotipo instagram na cor branca" /> 
        </a>

        <a href="https://github.com/allanina" target="_blank" rel="noreferrer">
          <img className="content__social__media-img" src={ImgGithub} alt="logotipo facebook na cor branca" />
        </a>

        <a href="https://www.linkedin.com/in/allanaevellyn/" target="_blank" rel="noreferrer">
          <img className="content__social__media-img" src={ImgLinkedin} alt="logotipo facebook na cor branca" />
        </a>

      </div>

    </article>
  )
}

export default ContentAutor