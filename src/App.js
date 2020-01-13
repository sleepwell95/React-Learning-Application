import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tomas', age: 21 },
      { name: 'Aiste', age: 20 },
      { name: 'Matas', age: 21 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 21 },
        { name: 'Aiste', age: 20 },
        { name: 'Matas', age: 21 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Tomas', age: 22 },
        { name: event.target.value, age: 21 },
        { name: 'Matas', age: 22 }
      ]
    } )
  }

  render () {
    return (
      <div className="App">
        <h1>Hi, it is Me!</h1>
        <p>This is really working!</p>
        
        <button onClick={() => this.switchNameHandler('Tomas!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Aistukas!')}
          changed={this.nameChangedHandler} >Watching TV Series</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
