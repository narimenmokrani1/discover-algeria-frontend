
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import States from './components/navigation/states/States';
function App() {
	
  const [statesByRegion, setStatesByRegion] = useState([]);

	return (
		<div className='App'>
      
			<SearchBar
        setStatesByRegion={setStatesByRegion}

			/>
      <States statesByRegion={statesByRegion}/>
		</div>
	);
}

export default App;
