import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function States({ statesByRegion }) {

	// if (!state) {
	// 	return <h1>still loading...</h1>;
	// }
	return (
		<div>
			{statesByRegion.map((element) => {
				return (
					<div key={element.state_code}>
						<h1>
							{element.state} {element.state_code}
						</h1>
						<img src={element.image_url} alt='' />
					</div>
				);
			})}
		</div>
	);
}

export default States;