import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
1.
* Create a react app from scratch using `create-react-app`.
2.
* Use functional components over class based components when able
3.
* Use props instead of State
4.
* Keep track of tasks using redux.
5.
* Create, Complete, and Delete tasks using action creators with redux.
6.
* A user should be able to click on a task to be taken to a detailed view of that task:
  * A user should be able to modify the title of a task.
  * A user should be able to add/modify the description of a task.
  * A user should be able to save changes to a title/description:
    * This should navigate the user to the main list of tasks after saving changes.
  * A user should be able to cancel text changes:
    * This should set the input fields' values back to their original value.
  * A user should be able to delete a task:
    * This should navigate the user back to the main list of tasks after deleting a task.
  * A user should be able to complete a task:
    * This should navigate a user back to the main list of tasks after completing a task.
7.
* A user should be able to click on a link to be taken back to the main list of tasks from the detailed view.

*/
class App extends Component {
  render() {
    return ( // update container names later for clarity?
      <div className="App">
        <div className="TodoContainer">
          <div className="ContainerLeft">
            <h2 className="LeftText"> TODO APP CONTAINER LEFT</h2>
            <div id="myDIV" class="header">
              <input type="text" id="myInput" placeholder="Title..." />
              <span onclick="newElement()" class="addBtn">Add</span>
            </div>
            <div className="ContainerLeft2">
              <h3 className="RightText">Smaller Left</h3>
            </div>
          </div>
          <div className="ContainerRight"> 
          <h2 className="RightText"> TODO APP CONTAINER RIGHT</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
