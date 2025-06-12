import React from 'react'
import VideoImage from '../assets/video.jpg'
import VideoImage2 from '../assets/play.png'

const Video = () => {
  return (
    <section class="video-section">
		<div class="container">
			<div class="video-items ">
				<div class="video-icon wow fadeInDown" data-wow-duration="3s">
					<a href="https://www.youtube.com/watch?v=bY-mOdgz7zQ" class="video-popup">
					<img src={VideoImage2} alt="" />
					</a>
				</div>
				<h3 class=" wow fadeInUp" data-wow-duration="3s">Our template's Video</h3>
			</div>
		</div>
	</section>
  )
}

export default Video
