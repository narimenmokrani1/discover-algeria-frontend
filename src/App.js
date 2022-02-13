
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
	const [userSelection, setUserSelection] = useState('');
	return (
		<div className='App'>
			<SearchBar
				userSelection={userSelection}
				setUserSelection={setUserSelection}
			/>
		</div>
	);
}

export default App;
