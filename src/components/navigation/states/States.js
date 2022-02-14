import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function States() {
	const { region } = useParams();
	const [statesByRegion, setStatesByRegion] = useState([]);

	useEffect(() => {
		const url = `http://localhost:3000/states/regions/${region}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setStatesByRegion(res);
			});
	}, [region]);

	if (statesByRegion.length === 0) {
		return <h1>still loading...</h1>;
	}
	return (
		<div>
			{statesByRegion.map((element) => {
				return (
					<div key={element.state_code}>
						<h1>
							{element.state} {element.state_code}
						</h1>
						<Link to={`/states/${element._id}`}>
							<img src={element.image_url} alt='' />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default States;
