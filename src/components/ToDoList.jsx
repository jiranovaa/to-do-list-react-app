import React from 'react';
import './ToDoList.css';
import Item from '../components/Item';

class ToDoList extends React.Component {
  constructor() {
    super()
    
    let items = [];
    const lsItems = localStorage.getItem('items');
    if (lsItems) {
      items = JSON.parse(lsItems);
    }
    
    this.state = {
      InputValue: '',
      ButtonDisabled: true,
      items: items
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
    let newItems = [...this.state.items, {id: Date.now(), date: new Date().toLocaleString(), title: this.state.InputValue}];
    this.setState({
      InputValue: '',
      ButtonDisabled: true,
      items: newItems
    });
    localStorage.setItem('items', JSON.stringify(newItems));
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
            <h2>TO DO List</h2> 
            <form onSubmit={this.onButtonSubmit}>
                <input 
                    className='input-field'
                    value={this.state.InputValue}
                    onChange={this.onInputChange}
                    type='text'
                    maxLength='40'
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