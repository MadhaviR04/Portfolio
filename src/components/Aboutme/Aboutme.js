import responsibility from '../images/icons/responsibility.jpg'
import ideas from '../images/icons/ideas.png'
import { SiSpeedtest } from 'react-icons/si';
import { VscChecklist } from 'react-icons/vsc';
import { MdLightbulb } from 'react-icons/md';
import { BiRocket } from 'react-icons/bi';

function Aboutme(props) {
	return(
		<section id="about" ref={props.refAboutProp}>

			<div class="flex header waypoint animated slide-in-left" data-animation="slide-in-left">ABOUT</div>
			<div class="flex header-bar  animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"></div>
			<div class="container ">
				<div class=" row label-wrap">
	            <div class=" row-gt-sm">
	              <div class="bullet-wrap">
					<div class="bullet-wrap-one"></div>
	                <div class="flex hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x">
	                  <div class="hexagon">
	                    <SiSpeedtest size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex waypoint animated fade-in" data-animation="fade-in">
	                  <div class="label bold">Fast</div>
	                  <div class="content description">
	                    Fast load times and lag free interaction, my highest
	                    priority.
	                  </div>
	                </div>
	              </div>

	              <div class="bullet-wrap">
	              	<div class="bullet-wrap-two"></div>
	                <div class="flex hex-wrap waypoint animated flip-in-x">
	                  <div class="hexagon">
	                    <VscChecklist size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex waypoint animated fade-in">
	                  <div class="label bold">Responsive</div>
	                  <div class="content description">My layouts will work on any device, big or small.</div>
	                </div>
	              </div>
	            </div>
	            <div class=" row-gt-sm">
	              <div class="bullet-wrap">
	                <div class="bullet-wrap-three"></div>
	                <div class="flex hex-wrap waypoint animated flip-in-x" >
	                  <div class="hexagon">	                    
	                    <MdLightbulb size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex waypoint animated fade-in">
	                  <div class="label bold">Intuitive</div>
	                  <div class="content description">Strong preference for easy to use, intuitive UX/UI.</div>
	                </div>
	              </div>

	              <div class="bullet-wrap">
	                <div class="bullet-wrap-four"></div>
	                <div class="flex hex-wrap waypoint animated flip-in-x">
	                  <div class="hexagon"> 
	                    <BiRocket size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex waypoint animated fade-in">
	                  <div class="label bold">Dynamic</div>
	                  <div class="content description">
	                    Websites don't have to be static, I love making pages come
	                    to life.
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="flex row content-wrap">
	          		<h2 class="obj_title">OBJECTIVE</h2>
	          		<p class="content obective-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
	          </div>
			</div>
		</section>
	)
}

export default Aboutme;