import React from 'react';
import './Cards.css'

// name was getting too big so if statement
const Card = function({name, id, email}) {

	if(id === 8)
	{
		return (
			<div className="bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
			
				<img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
				<div className="tc">
					<h4> {name} </h4>
					<p> {email} </p>
				</div>
			</div>
		);
	}

	return (

		<div className="bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
		
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
			<div className="tc">
				<h3> {name} </h3>
				<p> {email} </p>
			</div>
		</div>
	);
}


export default Card;
