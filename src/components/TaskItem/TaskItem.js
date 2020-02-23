import React from "react"
import { Card, Checkbox } from '@material-ui/core';
import { connect } from 'react-redux'

class TaskItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event){
		this.props.complete();
  	};

	render(){
		return (
			<div className="mb10">
				<Card>
					<Checkbox
						checked={this.props.checked}
						onChange={this.handleChange}
						value="secondary"
						color="primary"
					/>
					{
					this.props.checked 
					?
						<span style={{textDecoration: 'line-through'}}>{this.props.title}</span>
					:
						<span>{this.props.title}</span>
					}
					<button onClick={this.props.delete}>Delete</button>
					<button onClick={this.props.edite}>Edit</button>
				</Card>
			</div>
		)
	}
}

export default TaskItem;