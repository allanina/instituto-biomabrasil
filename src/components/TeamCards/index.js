import {useState, useEffect} from 'react'
import './styles.css'


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
    <h1 className="team__cards-title">Equipe do Instituto BiomaBrasil</h1>

  
    <ul className="team__members">

      {teamMember.map(members => {
        return <li className="member__card">
          <img id="image__member" className="card__content-img" src={members.profile} alt={members.name}/>
          <p className="members_name">{members.name}</p>
          <p className="members_bio">{members.bio}</p>
          <a href={members.instagram} target="_blank" rel="noreferrer" className="members_instagram">Instagram</a>
          </li>
    })}
  

    </ul>
  </article>
)
}
export default TeamCards