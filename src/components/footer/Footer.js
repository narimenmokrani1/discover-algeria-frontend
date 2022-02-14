import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './Footer.css'
function Footer(props) {
	return (
		<div>
			<footer>
				<ul className='footer-list'>
					<a href='https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/'>
						<LinkedInIcon className='icon' />
						<li className='icon-text'>Narimen Mokrani</li>
					</a>
					<li className='copy-footer'>Discover Algeria &copy; 2022</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
