import React from 'react';
import './App.css';
import Item from './components/Item';
// import InputField from './components/InputField';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      InputField: '',
      items: []
    }
  }

  onInputChange = (event) => {
    this.setState({InputField: event.target.value});
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, {id: Date.now(), date: new Date().toLocaleString(), title: this.state.InputField}],
      InputField: ''
    });
  }

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  }

  render() {
    return (
        <div>
          {/* <InputField onSubmit={this.onButtonSubmit} onChange={this.onInputChange}/> */}
          <form onSubmit={this.onButtonSubmit}>
                <input 
                    value={this.state.InputField}
                    onChange={this.onInputChange}
                    type='text'
                    placeholder='Add a new TO DO'
                />
                <input type='submit' value='Add' />
            </form>
          <div>
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
                    />)
                })
              }
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
