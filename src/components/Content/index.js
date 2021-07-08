import "./styles.css"
import Cards from "../Cards"
import CardsMangue from "../CardsMangue"


const Content = () => {
  return(
    <section id="content" className="home__content">
      <h1 className="home__content-title"> Instituto BiomaBrasil </h1>
      
      <Cards />
      
      <p>
        O Instituto BiomaBrasil tem atuado ativamente na comunidade, com ações de educação ambiental, conservação e busca por igualdade social. Formado por cientistas e pesquisadores da área ambiental, o Intituto atualmente atua em diversas partes do Brasil, mas especificamente em áreas de litoral, visando a conservação de áreas costeiras.
      </p>

      <p>
        O Instituto participa ativamente do desenvolvimento do Projeto "Guia Didático Os Maravilhosos Manguezais do Brasil", dando formação para educadores das mais diversas áreas do conhecimento, contando com o apoio de diversas instituições, como a Universidade de Pernambuco (UPE), a ONG SOS Mata Atlântica, a Fundação Toyota do Brasil e a Área de Proteção Ambiental (APA) Costa dos Corais.
      </p>

      <h1 className="home__content-title-mangue"> Guia Didático "Os maravilhosos manguezais do Brasil" </h1>

      <CardsMangue />
      
      <p>
      O Guia também estimula a organização dos educadores em redes e fóruns, menciona as diferentes categorias de Unidades de Conservação, sugere apontamentos para elaboração de projetos de Educação Ambiental e orienta atividades guiadas com grupos de estudantes nos manguezais. O Guia, como um todo, é estruturado de forma a poder ser aplicado nas diferentes disciplinas que conformam o currículo escolar, tanto nas ciências naturais (Biologia, Física e Química), como História, Geografia, Matemática, Língua Portuguesa, Literatura, Sociologia, Artes e Educação Física.
      </p>

      <p>
      A metodologia consiste num curso de 16 horas, em dois dias seguidos, com atividades teóricas, práticas, aula de campo e tempo de culminância para discussão de projetos. São 30 a 40 vagas para professores da rede pública. Os cursos são ministrados preferencialmente no final ou início do ano letivo, permitindo que os professores possam incluir conteúdos do guia em seus projetos pedagógicos anuais. Durante o ano letivo, após o curso, professores recebem visitas periódicas de monitores do programa para poder compartilhar experiências e estimular a entrada de novos docentes.
      </p>
      
    </section>
  
  )
}

export default Content 