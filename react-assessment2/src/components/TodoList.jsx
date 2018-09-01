import React, { Component } from 'react';
import TodoItems from './TodoItem'; 
import '../style/TodoList.css';
import axios from 'axios';


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get('/user?ID=12345')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(this.state.items);  
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
  
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task" type="text" autofocus="true">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <div className="counter1">
          { this.state.items.length == 1 &&
            <h2>
              You have {this.state.items.length} To-Do item.
            </h2>
          }
          { this.state.items.length > 1 &&
          <h2>
            you have {this.state.items.length} To-Do items.
          </h2>
          }
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
};
