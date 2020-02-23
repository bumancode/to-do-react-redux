import React from "react"
import { Card, Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

class AddTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
	}

	/*
		dispatch(addTodo(input.value))
	*/
	_handleTextFieldChange(e){
        this.setState({
            value: e.target.value
        });
	}
	AddHandler(){
	  	const { dispatch } = this.props; 
		dispatch(addTodo(this.state.value))
        this.setState({
            value: ''
        });
	}

	render(){
		return (
			<div className="mb10">
				<Card>
				 <TextField
						id="outlined-secondary"
						variant="outlined"
						size="small"
						color="secondary"
						value={this.state.value}
						onChange={(e)=>this._handleTextFieldChange(e)}
					/>
				<Button onClick={()=>this.AddHandler()} variant="contained" color="primary">Add task</Button>
				</Card>
			</div>
		)
	}
}

export default connect()(AddTask);

