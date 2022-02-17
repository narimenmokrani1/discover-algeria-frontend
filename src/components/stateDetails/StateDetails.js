import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import style from './StateDetails.css';
function StateDetails(props) {
	const { _id } = useParams();
	const [state, setState] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const url = `https://frozen-journey-66963.herokuapp.com/states/${_id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setState(res);
			});
	}, [_id]);

	function findAttraction() {
		navigate(`/states/attractions/${_id}`);
	}

	if (!state) {
		return <h1>still loading...</h1>;
	}
	return (
		<div className='details-container'>
			<div className='clothes-container'>
				<img src={state.clothes_url} alt='' className='clothes'/>
				<h2>{state.traditional_clothes}</h2>
				<button onClick={findAttraction} className='attractions-button'>
					Click to check attractions
				</button>
			</div>
			<div className='state-n-food-container'>
				<div key={state.state_code}>
					<div className='state-img-container'>
						<img src={state.image_url} alt='' className='state' />
						<h2>
							{state.state} {state.state_code}
						</h2>
					</div>

					<div className='food-container'>
						<img src={state.food_url} alt='' className='food' />
						<h2>{state.traditional_food}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StateDetails;
