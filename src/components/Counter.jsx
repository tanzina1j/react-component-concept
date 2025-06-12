import React from 'react'
import CounterImage from '../assets/bg.jpg'
const Counter = () => {
  return (
    <div className="counter-section pt-120 pb-120">
			    <div className="container">
				    <div className="section-header section-center">
					   <h1 className="section-title">100% responsive</h1>
					   <h3>multipurpose WordPress theme ever</h3>
				    </div>
				    <div className="conter-wrp">
					    <div className="row g-4">
						    <div className="col-lg-3 col-md-6">
							    <div className="item text-center">
								   <span className="count counter-color-1">740</span>
								   <p>CUPS OF COFFEE</p>
							    </div>
						    </div>
						    <div className="col-lg-3 col-md-6">
							    <div className="item text-center">
								   <span className="count counter-color-2">130</span>
								   <p>completed works</p>
							    </div>
						    </div>
						    <div className="col-lg-3 col-md-6">
							    <div className="item text-center counter-color-3">
								   <span className="count">3</span>
								   <span>k</span>
								   <p>happy customers</p>
							    </div>
						    </div>
						    <div className="col-lg-3 col-md-6">
							    <div className="item text-center">
								   <span className="count counter-color-4">400</span>
								   <p>letters sent</p>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
			</div>
  )
}

export default Counter
