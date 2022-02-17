import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './AddState.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddState(props) {
	const navigate = useNavigate();

	const [state, setState] = useState({
		state: '',
		image_url: '',
		traditional_clothes: '',
		clothes_url: '',
		traditional_food: '',
		food_url: '',
		region: '',
		description: '',
	});

	const handleChange = (event) => {
		event.preventDefault();
		setState({ ...state, [event.target.id]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post(
				'https://frozen-journey-66963.herokuapp.com/states',
				state
			);
			navigate(`/`, { replace: true });
		} catch (err) {}
	};

	const handleRegion = (event) => {
		setState({ ...state, region: event.target.value });
	};

	return (
		<div className='create'>
			<form className='form' onSubmit={handleSubmit}>
				<Typography component='div' className='form-title'>
					<h1>
						Add a State here
					</h1>
				</Typography>
				<div className='inputs'>
					<TextField
						id='state'
						label='State Name'
						variant='outlined'
						onChange={handleChange}
						value={state.state}
						InputProps={{ className: 'state-input' }}
					/>

					<TextField
						label='Image of the State'
						variant='outlined'
						onChange={handleChange}
						id='image_url'
						value={state.image_url}
						InputProps={{ className: 'state-input' }}
					/>

					<TextField
						label='traditional clothes'
						variant='outlined'
						onChange={handleChange}
						id='traditional_clothes is called?'
						value={state.traditional_clothes}
						InputProps={{ className: 'state-input' }}
					/>

					<TextField
						label="Paste here the Clothes' image Url"
						variant='outlined'
						onChange={handleChange}
						id='clothes_url'
						value={state.clothes_url}
						InputProps={{ className: 'state-input' }}
					/>

					<TextField
						label='Description'
						variant='outlined'
						onChange={handleChange}
						id='description'
						value={state.description}
						InputProps={{ className: 'state-input' }}
					/>

					<TextField
						label='Traditional For this State'
						variant='outlined'
						onChange={handleChange}
						id='traditional_food'
						value={state.traditional_food}
						InputProps={{ className: 'state-input' }}
					/>
					<TextField
						label="Paste here the Food's image Url"
						variant='outlined'
						onChange={handleChange}
						id='food_url'
						value={state.food_url}
						InputProps={{ className: 'state-input' }}
					/>
				</div>

				<FormControl>
					<FormLabel id='demo-row-radio-buttons-group-label'>Region</FormLabel>
					<RadioGroup
						row
						aria-labelledby='demo-row-radio-buttons-group-label'
						name='row-radio-buttons-group'>
						<FormControlLabel
							value='north'
							control={<Radio />}
							label='North'
							onChange={handleRegion}
						/>
						<FormControlLabel
							value='north-east'
							control={<Radio />}
							label='North East'
							onChange={handleRegion}
						/>
						<FormControlLabel
							value='north-west'
							control={<Radio />}
							label='North West'
							onChange={handleRegion}
						/>
						<FormControlLabel
							value='desert'
							control={<Radio />}
							label='Desert'
							onChange={handleRegion}
						/>
						<FormControlLabel
							value='east'
							control={<Radio />}
							label='east'
							onChange={handleRegion}
						/>
					</RadioGroup>
				</FormControl>

				<button className='submit-btn'>Submit</button>
			</form>
		</div>
	);
}

export default AddState;
