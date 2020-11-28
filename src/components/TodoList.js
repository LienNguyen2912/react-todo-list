import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        let {items, handleClear, handleDelete, handleEdit} = this.props;
        let itemList = items.map((item) => {
            return (<TodoItem 
                        item = {item} 
                        key={item.id}
                        handleDelete = {handleDelete}
                        handleEdit = {handleEdit}
                    />);
        });
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                {itemList}
                <button type="button" className="btn btn-danger btn-block tex-capitalize mt-5" onClick={handleClear} >
                    Clear list
                </button>
            </ul>
        )
    }
}
export default TodoList