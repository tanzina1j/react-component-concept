import React from 'react'
import ServiceIcon1 from '../assets/icon11.png'
import ServiceIcon2 from '../assets/icon12.png'
import ServiceIcon3 from '../assets/icon13.png'
import ServicesCard from './ServicesCard'
const Services = () => {
    const services =[
        {
            id:1,
            image:ServiceIcon1,
            title:"Multi-purpouse",
            description:"Appropriately intrcentivize and anenterprise areincentivize and enterprise  appropriately at awesome best practices",
        },
        {
            id:2,
            image:ServiceIcon2,
            title:"Easy to use",
            description:"Appropriately intrcentivize and anenterprise areincentivize and enterprise  appropriately at awesome best practices",
        },
        {
            id:3,
            image:ServiceIcon3,
            title:"Great quality",
            description:"Appropriately intrcentivize and anenterprise areincentivize and enterprise  appropriately at awesome best practices",
        },
    ]
  return (
    <section className="service-section pt-120 pb-120">
		<div className="container">
			<div className="row g-4">
                {
                    services?.map(service=>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={service.id}>
                            <ServicesCard serviceData={service}/>
                        </div>
                    )
                }
            </div>
		</div>
	</section>
  )
}

export default Services
