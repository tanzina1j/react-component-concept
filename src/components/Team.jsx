import React from 'react'
import TeamImage from '../assets/bg.jpg'
import Team1 from '../assets/team4.jpg'
import Team2 from '../assets/team5.jpg'
import Team3 from '../assets/team6.jpg'
import TeamCard from './TeamCard'
const Team = () => {
    const teams =[
        {
            id:1,
            image:Team1,
            title:"Faiaz  Ibne  Forhad",
            description:"ui/ux designer",
        },
        {
            id:2,
            image:Team2,
            title:"Wonindita  Worthy",
            description:"web designer",
        },
        {
            id:3,
            image:Team3,
            title:"Inaya  Naumi",
            description:"graphic design",
        },
    ]
  return (
    <section className="team-section pt-120 pb-120">
		<div className="container">
			<div className="section-header section-center">
				<h3 className="section-title">our best team</h3>
				<p>Rapidiously expedite granular imperatives before economically sound web services.<br/> Credibly actualize pandemic strategic themeplatform.</p>
			</div>
			<div className="row g-4">
                {
                    teams?.map(team=>
                        <div className="col-lg-4 col-md-6" key={team.id}>
                            <TeamCard teamData={team}/>
                        </div>
                    )
                }
				
						
			</div>
		</div>
	</section>
  )
}

export default Team
