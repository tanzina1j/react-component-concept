import React from 'react'
import LogoIcon from '../assets/images.png'
const Header = () => {
  return (
     <section>
        <header className="header-section">
				<div className="container">
					<div className="header-wrapper">
						<div className="logo-menu">
							<a href="index.html" className="logo">
								<img src={LogoIcon} alt="main-logo"/>
							</a>
						</div>
						<ul className="main-menu">
							<li className="active">
								<a href="#0">home</a>
							</li>
							<li>
								<a href="#0">About</a>
							</li>
							<li>
								<a href="#0">Services</a>
							</li>
							<li>
								<a href="#0">Team</a>
							</li>
							<li>
								<a href="#0">Blog</a>
							</li>
							<li>
								<a href="#0">Pages</a>
							</li>
							<li>
								<a href="#0">Shop</a>
							</li>
							<li>
								<a href="contact.html">Contact Us </a>
							</li>
						</ul>
					</div>
				</div>
			</header>
    </section>
  )
}

export default Header
