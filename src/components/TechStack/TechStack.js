

import responsibility from '../images/icons/responsibility.jpg'
import ideas from '../images/icons/ideas.png'

function TechStack(props) {
	return(
		<section class="teck-stack-wrapper" id="techstack" ref={props.refTechProp}>

			<div class="flex header waypoint animated slide-in-left" data-animation="slide-in-left">Tech Stack</div>
			<div class="flex header-bar  animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"></div>
			<div class="flex">
	          		<p class="content tech-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
	        </div>
			<div class="flex container ">
				<div class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
              <div class="bar flex">                
                <div class="flex percentage"><span>90%</span></div>
                <div class="bar fill" >
                </div>                
                <div class="tag bold flex content">PHP/Laravel</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">React/JavaScript</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">Rest API</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">SQL</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex  content">jQuery</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>70%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex">HTML</div>
              </div>

              <div class="bar flex">                
                <div class="flex percentage"><span>70%</span></div>
                <div class="bar fill">
                </div>
                <div class="tag bold flex content">CSS</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>60%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex">BigCommerce</div>
              </div>

              <div class="bar flex">              
                <div class="flex percentage"><span>60%</span></div>
                <div class="bar fill">
                </div>
                <div class="tag bold flex content">Magento 2</div>
              </div>
            </div>
	        </div>
		</section>
	)
}

export default TechStack;