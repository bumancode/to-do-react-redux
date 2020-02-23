import React from "react"
import { Card, Paper, Tab, Tabs } from '@material-ui/core';
import { connect } from 'react-redux'
import { TaskItem } from '../TaskItem';
import { toggleTodo } from '../../actions'
import { VisibilityFilters } from '../../actions'
import { deleteTask } from '../../actions'
import { editeTask } from '../../actions'
class Tasks extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			taskId: 0
		}
		this.text = React.createRef();
	}
	handleChange(event, newValue){
		this.setState({ value: newValue })
	}
	completedHandler(a){
		this.props.toggleTodo(a)
	}
	deleteTask(a){
		this.props.deleteTask(a)
	}

	eTask(task){
		this.refs.googleInput.value = task.text
		this.setState({taskId: task.id})
	}
	editeTask(){
		this.props.editeTask(this.state.taskId, this.refs.googleInput.value)
	}
	render(){

		return (

			<div className="mb10">
			<button>All({this.props.todos.length})</button>
			<button>Active({this.props.todos.filter(t => !t.completed).length})</button>
			<button>Completed({this.props.todos.filter(t => t.completed).length})</button>
			{this.props.todos.map((a, i)=>{
		      return (<TaskItem
		        title={a.text}
		        checked={a.completed}
		        complete={()=>this.completedHandler(a.id)}
		        delete={()=>this.deleteTask(a.id)}
		        edite={()=>this.eTask(a)}
		        key={i}
		      />)
			})}

		      <div>
		      	<input ref="googleInput"/>
		      	<button onClick={()=>this.editeTask()}>Ok</button>
		      </div>
			</div>
		)
	}
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
	return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
};
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTask: id => dispatch(deleteTask(id)),
  editeTask: (id, text) => dispatch(editeTask(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);