import React from 'react';
import WeatherInput from './WeatherInput';
export default function App() {
	return (
		<div>
			<h1>test</h1>
			<WeatherInput />
		</div>
	);
}

// componentDidMount() {
// 		const apiKey = '4d8fb5b93d4af21d66a2948710284366';
// 		const url =
// 			'https://api.openweathermap.org/data/2.5/weather?q=utrecht&appid=4d8fb5b93d4af21d66a2948710284366&units=metric';

// 		fetch(url).then((response) => response.json()).then((data) => {
// 			console.log(data);
// 			const { main, name, sys, weather } = data;
// 			this.setState(name:name);
// 		});
// 	}
