import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import States from './components/navigation/states/States';
import StateDetails from './components/stateDetails/StateDetails';
import Footer from './components/footer/Footer';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/regions/:region' element={<States />} />
				{/* <Route path='/about' element={<About />} /> */}
				<Route path='/states/:_id' element={<StateDetails />} />
			</Routes>
      <Footer/>
		</div>
	);
}

export default App;
