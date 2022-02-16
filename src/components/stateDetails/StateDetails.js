import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function StateDetails(props) {
	const { _id } = useParams();
	const [state, setState] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const url = `http://localhost:3000/states/${_id}`;
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
		<div>
			<div key={state.state_code}>
				<h1>
					{state.state} {state.state_code}
				</h1>
				<Link to={`/states/${state._id}`}>
					<img src={state.image_url} alt='' />
				</Link>
				<div>
					<img src={state.clothes_url} alt='' />
					<h3>{state.traditional_clothes}</h3>
				</div>
				<div>
					<img src={state.food_url} alt='' />
					<h3>{state.tradtional_food}</h3>
				</div>
				<button onClick={findAttraction}>Click to check attractions</button>
			</div>
		</div>
	);
}

export default StateDetails;
