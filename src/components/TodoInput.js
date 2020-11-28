import React, { Component } from 'react'


class TodoInput extends Component {
    render() {
        const {item , handleChange, handleSubmit, editedItem} = this.props;
        let btnCaption = (editedItem === true) ? "edit item" : "add item";
        return (
            <div className="card card-body my-3">
                <form onSubmit = {handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>                                
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add a todo item" value={item} onChange={handleChange}></input>
                    </div>
                    <button type="submit" 
                        className={ (editedItem === true) ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>{btnCaption}</button>
                </form>
            </div>
        )
    }
}
export default TodoInput