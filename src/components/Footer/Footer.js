import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk, FaPhoneAlt, FaCodepen } from 'react-icons/fa';

function Footer(){
	return(
		<footer>
        <i class="mdi mdi-chevron-double-up page-link" dest="home"></i>

        <div class="icon-wrap flex row">
          <a href="https://www.linkedin.com/in/madhavi-ravi/">
          <div class="flex icon" id="icon-2">
              <FaLinkedin />
            </div>
          </a>
          <a href="https://www.facebook.com/matthew.williams.351">
            <div class="flex icon" id="icon-3">
              <FaMailBulk/>
            </div>
          </a>
          <a href="https://instagram.com/infinite_edge/">
            <div class="flex icon" id="icon-4">
              <FaPhoneAlt/>
            </div>
          </a>
          <a href="http://codepen.io/matthewwilliams/">
            <div class="flex icon" id="icon-5">
              <FaCodepen/>
            </div>
          </a>
        </div>
        <div class="info-box">
          <div class="footnote">
            MADHAVI RAVI <span class="highlight">©2022</span>
          </div>
        </div>
      </footer>
	);
}

export default Footer;