import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import '../components/Cards.css'
import '../index.css'
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {

	// 1.
	constructor(){
		super();
		// state is dynamic, can change
		// total has been added, robots.js can be deleted now
		this.state = {
			total: [],
			robots: [],
			searchfield: ''
		}
	}

	// 3.
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(users => this.setState({robots: users, total: users}));
	}

	// we send the below function to App's child SearchBox as a prop, and any change in 
	// SearchBox alerts App, which has the information about what the input is in
	// the search bar at present.

	// IMPORTANT
	// we made it an arrow function so that *this* would refer to the App function &
	// not the input tag in the SearchBox function, where the onChange occurs
	onSearchChange = (event) =>	
	{
		const total = this.state.total;
		let current_input = event.target.value;
		const filtered_robots = [];
		for(let i=0; i<total.length; i++)
		{
			if(total[i].name.toLowerCase().includes(current_input.toLowerCase()))
				filtered_robots.push(total[i]);
		}

		this.setState({searchfield: current_input, robots: filtered_robots});
		// console.log(filtered_robots);
	}

	// 2., 4.
	render() {

		if(this.state.total.length === 0)
			return <h2> Loading.... </h2>
		else
		{
			return (
				<div className="tc">
					<h1 className="f1"> ROBOFRIENDS </h1>
					<SearchBox searchChange = {this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={this.state.robots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
