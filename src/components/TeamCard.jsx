import React from 'react'

const TeamCard = ({teamData}) => {
    const {image, title, description} = teamData
  return (
    <div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="img"/>
                </div>
                <div className="flip-card-back">
                    <div className="mt-100">
                        <h5>{title}</h5>
                        <p>{description}</p> 
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default TeamCard
