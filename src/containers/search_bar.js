import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'; 


class SearchBar extends Component {
	constructor(props) {
		super(props); 

		this.state = {term:''}; 

		this.onInputChange = this.onInputChange.bind(this);

		this.onFormEvent = this.onFormEvent.bind(this); 
	}

	onInputChange(e) {
		this.setState({term: e.target.value});  
	};

	onFormEvent(e) {
		e.preventDefault(); 
		//fetch weather
		//console.log(this.state.term); 
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' }); 
	};
	render() {
		return (
			<form onSubmit={this.onFormEvent} className='input-group'>
				<input 
					placeholder='input your city'
					className = 'form-control'
					value={this.state.term} 
					onChange={this.onInputChange}/>
				<span className='input-group-btn'> 
					<button type='submit' className='btn btn-secondary'>submit</button>
				</span>
			</form>
		); 
	}
}


function mapDispatchToProps (dispatch) {
	 return bindActionCreators({fetchWeather},dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar);



