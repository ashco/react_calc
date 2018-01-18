import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props){
		super(props)
		this.state = {
			total: 0,
			val1: null,
			val2: null
		};

		this.addNum = this.addNum.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
	}
	
	addNum(event){
		event.preventDefault();
		let num1 = this.state.val1;
		let num2 = this.state.val2;
		this.setState({total: parseInt(num1) + parseInt(num2)});
		console.log('Added!');
	}

	handleChange1(event){
		this.setState({val1: event.target.value})
	}

	handleChange2(event){
		this.setState({val2: event.target.value})
	}

	render () {
		return (
			<div className="container">
				<form onSubmit={this.addNum}>
					<div className="add">
						<input type="integer" value={this.state.val1} onChange={this.handleChange1} />
						<span>+</span>
						<input type="integer" value={this.state.val2} onChange={this.handleChange2} />
						<span>=</span>
						<h3>{this.state.total}</h3>
						<input type="submit" value="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default Calculator;