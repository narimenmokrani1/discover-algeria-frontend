import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function SearchBar(props) {
    const [state, setState] = useState(null)
    const [noState, setNoState] =useState([])
    const [region, setRegion] =useState('')
    useEffect(() => {
        const url = 'http://localhost:3000/states';
      fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setState(res);
				});
    }, [])

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
			props.setUserSelection(region);
		}
    return (
        <div>
            <form className='searchBar-container' onSubmit={findStates}>
                <select name="issueType" id="issueType" onChange={(event)=> {
                    setRegion(event.target.value)
                }}>
                {noState.map((option, index) => {
                    return (
                        <option key={index} value={option} className='option'>
                            {option}
                        </option>
                    )
                })}
                </select>
                <button className='searchBar-button'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;