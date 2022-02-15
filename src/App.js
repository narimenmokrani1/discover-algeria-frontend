import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import States from './components/navigation/states/States';
import StateDetails from './components/stateDetails/StateDetails';
import Footer from './components/footer/Footer';
import About from './components/navigation/about/About';
import Navigation from './components/navigation/Navigation';
function App() {
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
				<h1>Discover Algeria</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/regions/:region' element={<States />} />
				{/* <Route path='/about' element={<About />} /> */}
				<Route path='/states/:_id' element={<StateDetails />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
