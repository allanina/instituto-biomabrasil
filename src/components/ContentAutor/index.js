import "./styles.css"
import Img from "../../assets/autor-profile.jpg"

const ContentAutor = () =>{
  return(
    <article className="autor__content">
      <h1 className="autor__content-title">Autora</h1>

      <img className="card__content-img"src={Img} alt ="imagem da autora" />

      <p className="autor__content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed velit dignissim sodales ut eu sem integer. Augue interdum velit euismod in pellentesque massa placerat duis. Amet consectetur adipiscing elit ut aliquam purus sit. Mi eget mauris pharetra et. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Etiam sit amet nisl purus. Mattis molestie a iaculis at erat pellentesque adipiscing. Neque laoreet suspendisse interdum consectetur libero. Ac odio tempor orci dapibus. Et tortor at risus viverra adipiscing.
        </p>

        <p className="autor__content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed velit dignissim sodales ut eu sem integer. Augue interdum velit euismod in pellentesque massa placerat duis. Amet consectetur adipiscing elit ut aliquam purus sit. Mi eget mauris pharetra et. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Etiam sit amet nisl purus. Mattis molestie a iaculis at erat pellentesque adipiscing. Neque laoreet suspendisse interdum consectetur libero. Ac odio tempor orci dapibus. Et tortor at risus viverra adipiscing.
        </p>

    </article>
  )
}

export default ContentAutor