import React from 'react'

const ServicesCard = ({serviceData}) => {
    const { title, image, description} = serviceData
  return (
    <div>
        <div className="service-items">
            <div className="icon center border-one">
                <img src={image} alt="icon-image"/>
            </div>
            <div className="content">
                <h6>{title}</h6>
                <p> {description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard
