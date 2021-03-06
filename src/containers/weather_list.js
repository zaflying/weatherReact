import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather (cityData) {
		const cityName = cityData.city.name;
		const temp = cityData.list.map(l => l.main.temp); 
		const pressure = cityData.list.map(l => l.main.pressure);
		const humidity= cityData.list.map(l => l.main.humidity);

		// console.log(`temp: ${temp}`); 
		// console.log(`pressure: ${pressure}`); 
		// console.log(`temp: ${humidity}`); 
		return (
			<tr key = {cityName}>
				<td>{cityName}</td>
				<td><Chart data = {temp} color = 'orange'/></td>
				<td><Chart data = {pressure} color = 'green'/></td>
				<td><Chart data = {humidity} color = 'blue'/></td>
			</tr>
		);
	}


	render() {
		return (
			<table className = 'table table-hover'> 
				<thead> 
					<tr>
						<th>city</th>
						<th>Temperature [K]</th>
						<th>Pressure [hPa]</th>
						<th>Humidity [%]</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}


function mapStateToProps (state) {
	return {weather : state.weather};
}

export default connect (mapStateToProps)(WeatherList); 