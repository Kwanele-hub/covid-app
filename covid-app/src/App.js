import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class  App extends Component() {
  constructor(){
    super()
    this.state = {name: '', surname: '', status: ''};

  }
render(){
  return(
    <div>
      <h1>covid test</h1>
    </div>
  )
  
}

  
}

export default App;
