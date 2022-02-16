
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Attractions(props) {
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
                    <header>{state.state}</header>
					{state.places_to_visit.map((place) => {

                        return (
                            <div>

                                <h2>{place.name}</h2>
                                <img src={place.img_url} alt="" />

                            </div>
                        )
                    })}
				</div>
			);
}

export default Attractions;