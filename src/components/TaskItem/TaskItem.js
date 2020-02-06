import React from "react"
import { Card, Checkbox } from '@material-ui/core';

class TaskItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			checked: this.props.checked
		}
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event){
		this.setState({ checked: event.target.checked })
  	};

	render(){
		return (
			<div>
				<Card>
					<Checkbox
						checked={this.state.checked}
						onChange={this.handleChange}
						value="secondary"
						color="primary"
					/>
					{
					this.state.checked 
					?
						<span style={{textDecoration: 'line-through'}}>{this.props.title}</span>
					:
						<span>{this.props.title}</span>
					}
				</Card>
			</div>
		)
	}
}

export default TaskItem;