import {useState, useEffect} from 'react'
import './styles.css'


{/*creates the team cards with info from the API*/}
const TeamCards = () =>{
  const [teamMember, setTeamMember] = useState([])

useEffect(() =>{
  fetch('https://my-json-server.typicode.com/allanina/biomabrasil/members')
  .then(response => response.json())
  .then(data => setTeamMember(data))
},[])

return(
  <article className="members_cards">

    {/* the card itself */}
    <h1 className="content__title">Equipe do Instituto BiomaBrasil</h1>

  
    <ul className="team__member">

      {teamMember.map(members => {
        return <li className="person">
          <img className="card__content-img" src={members.profile} alt={members.name}/>
          <p className="members_name"> Nome: {members.name}</p>
          <p className="members_bio">{members.bio}</p>
          <a className="members_instagram">{members.instagram}</a>
          </li>
    })}
  

    </ul>
  </article>
)
}
export default TeamCards