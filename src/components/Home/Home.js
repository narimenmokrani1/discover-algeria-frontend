import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Home.css';
function SearchBar(props) {
	const navigate = useNavigate();
	const [state, setState] = useState(null);
	const [noState, setNoState] = useState([]);
	const [region, setRegion] = useState('');

	useEffect(() => {
		const url = 'https://discoveralgeria.onrender.com/states';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setState(res);
			});
	}, []);

	useEffect(() => {
		if (!state) return;
		const tempArray = state.map((item) => {
			return item.region;
		});

		const newSet = [...new Set(tempArray)];
		console.log(newSet);
		setNoState(newSet);
	}, [state]);
	function findStates(event) {
		event.preventDefault();
		console.log('looking for states');

		if (!region) {
			return;
		}

		navigate(`/regions/${region}`);
	}
	return (
		<div>
			<div className='text'>
				<h1 className='algeria'>Discover Algeria</h1>
			</div>
			<form className='searchBar-container' onSubmit={findStates}>
				<select
					name='issueType'
					id='issueType'
					onChange={(event) => {
						setRegion(event.target.value);
					}}>
					<option value=''>select a region to look up</option>
					{noState.map((option, index) => {
						return (
							<option key={index} value={option} className='option'>
								{option}
							</option>
						);
					})}
				</select>
				<button className='searchBar-button'>Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
