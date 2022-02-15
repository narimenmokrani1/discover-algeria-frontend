import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.css'
function Navigation(props) {
	return (
		<div>
			<nav className='nav-header'>
				<ul>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/'>Home</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;
