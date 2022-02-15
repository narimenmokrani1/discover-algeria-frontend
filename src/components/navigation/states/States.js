import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import style from './States.css';
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
		<ul className='cards'>
			{statesByRegion.map((element) => {
				return (
					<div key={element.state_code} className='card'>
						<Link to={`/states/${element._id}`}>
							<div className='card__image'>
								<img src={element.image_url} alt='' className='card-image' />
								<div className='card__overlay'>
									<div className='card__header'>
										<div className='card__title'>
											<h5>
												{element.state} {element.state_code}
											</h5>
										</div>
									</div>
								</div>
                        
							</div>
						</Link>
					</div>
				);
			})}
		</ul>
	);
}

export default States;
