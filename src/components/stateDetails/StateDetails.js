import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function StateDetails(props) {
    	const { _id } = useParams();
			const [state, setState] = useState(null);

			useEffect(() => {
				const url = `http://localhost:3000/states/${_id}`;
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
					
						
							<div key={state.state_code}>
								<h1>
									{state.state} {state.state_code}
								</h1>
								<Link to={`/states/${state.state_code}`}>
									<img src={state.image_url} alt='' />
								</Link>
							</div>
						
				
				</div>
			);
}

export default StateDetails;