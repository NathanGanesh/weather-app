import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherInput = () => {
	const [ weather, setWeather ] = useState({
		main2: [],
		name2: '',
		sys2: [],
		weather2: []
	});
	const [ input, setInput ] = useState('');

	async function getWeather(query) {
		const result = await axios(
			`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
		);
		console.log(result);
		const { main, name, sys, weather } = result.data;
		setWeather({ main2: main, name2: name, sys2: sys, weather2: weather });
	}

	function handleSubmit(event) {
		event.preventDefault();
		getWeather(input);
	}

	return (
		<div>
			<p>{weather.main2.temp}</p>
			<form onSubmit={(event) => handleSubmit(event)}>
				<input onChange={(event) => setInput(event.target.value)} />
			</form>
		</div>
	);
};

export default WeatherInput;
