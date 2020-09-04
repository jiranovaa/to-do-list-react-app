import React from 'react';
import './ToDoList.css';
import Item from '../components/Item';

class ToDoList extends React.Component {
  constructor() {
    super()
    this.state = {
      InputValue: '',
      ButtonDisabled: true,
      items: []
    }
  }

  onInputChange = (event) => {
    this.setState({
      InputValue: event.target.value,
      ButtonDisabled: this.isButtonDisabled(event.target.value)
    });
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({
      InputValue: '',
      ButtonDisabled: true,
      items: [...this.state.items, {id: Date.now(), date: new Date().toLocaleString(), title: this.state.InputValue}]
    });
  }

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  }

  isButtonDisabled = (inputValue) => {
    if (!inputValue) {
      return true;
    }
  
    const similarItems = this.state.items.find(item => item.title === inputValue);
    if (similarItems) {
      return true;
    }
    
    return false;
  }

  render() {
    return (
        <div className='todo-container'>
            <h1>TO DO List</h1> 
            <form onSubmit={this.onButtonSubmit}>
                <input 
                    className='input-field'
                    value={this.state.InputValue}
                    onChange={this.onInputChange}
                    type='text'
                    placeholder='Add a new TO DO'
                />
                <input 
                    className='add-button'
                    type='submit' 
                    value='Add'
                    disabled={this.state.ButtonDisabled} />
            </form>
            <div className='items-container'>
            <ul>
                {
                this.state.items.map(item => {
                    return (
                        <Item
                        className='item'
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        date={item.date}
                        onDelete={this.handleDelete}
                        />
                    )
                })
                }
            </ul>
            </div>
        </div>
    );
  }
}

export default ToDoList;