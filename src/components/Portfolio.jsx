import React from 'react'
import Portfolio1 from '../assets/gallery1.jpg'
import Portfolio2 from '../assets/gallery2.jpg'
import Portfolio3 from '../assets/gallery3.jpg'
import Portfolio4 from '../assets/gallery4.jpg'
import Portfolio5 from '../assets/gallery5.jpg'
import Portfolio6 from '../assets/gallery6.jpg'
import Portfolio7 from '../assets/gallery7.jpg'
import Portfolio8 from '../assets/gallery8.jpg'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    const portfolios =[
        {
            id:1,
            image:Portfolio1,
        },
        {
            id:2,
            image:Portfolio2,
        },
        {
            id:3,
            image:Portfolio3,
        },
        {
            id:4,
            image:Portfolio4,
        },
        {
            id:5,
            image:Portfolio5,
        },
        {
            id:6,
            image:Portfolio6,
        },
        {
            id:7,
            image:Portfolio7,
        },
        {
            id:8,
            image:Portfolio8,
        },
    ]
  return (
    <section className="portfolio-section pt-120 pb-120">
					<div className="section-header section-center">
						<h3 className="section-title">OUR PORTFOLIO</h3>
						<p>Rapidiously expedite granular imperatives before economically sound web services.<br/> Credibly actualize pandemic strategic themeplatform.</p>
					</div>
					<div className="button-group filters-button-group">
						<button className="button">All</button>
						<button className="button">web design</button>
						<button className="button">development</button>
						<button className="button">graphic </button>
						<button className="button">wordpress</button>
					</div>
					<div className="grid">
						<div className="row">
                           {
                             portfolios?.map(portfolio=>
                                <div className="portfolio-items col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6" key={portfolio.id}>
                                    <PortfolioCard portfolioData={portfolio}/>
                                </div>
                            )
                           }
							
							
						</div>
					</div>
					<div className="portfolio-button center pt-50">
					    <a href="portfolio-single.html" className="cmn--btn">view all portfolio</a>
				    </div>
			</section>
  )
}

export default Portfolio
