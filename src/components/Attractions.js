import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import style from './Attraction.css';
function Attractions(props) {
	const { _id } = useParams();
	const [state, setState] = useState(null);

	useEffect(() => {
		const url = `https://discoveralgeria.onrender.com/states/${_id}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setState(res);
			});
	}, [_id]);

	if (!state) {
		return <h1>still loading...</h1>;
	}
	return (
		<div>
			<header>
				<h1>{state.state}'s Attractions</h1>
			</header>
			<div className='all-container'>
				{state.places_to_visit.map((place) => {
					return (
						<div className='attraction-container'>
							<h2>{place.name}</h2>
							<div className='attraction-img-container'>
								<img src={place.img_url} alt='' className='attraction-img' />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Attractions;
