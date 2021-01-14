import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: "", surname: "", status: "", patients: []
    }
  }


  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }


  saveStatus(e) {
    this.setState({ status: e.target.value })
  }


  savePatientDetails(e) {
    e.preventDefault();
    const { name, surname, status, patients } = this.state;
    this.setState({ patients: [...patients, { name, surname, status }] })
    console.log(this.state)
  }

  render() {
    const { name, patients, surname } = this.state
    return (
      <div className="App">
        <h1> COVID APP TEST</h1>
        <form onSubmit={(e) => this.savePatientDetails(e)}>
          <input type="text" onChange={(e) => this.handleChange(e)} name="name" placeholder="name" value={name} />
          <input type="text" onChange={(e) => this.handleChange(e)} name="surname" placeholder="surname" value={surname} />
          <div style={{ display: "inline" }} onChange={(e) => this.saveStatus(e)}>
            <input name="status" type="radio" value="positive" /> Positive
            <input name="status" type="radio" value="negative" /> Negative
            <input name="status" type="radio" value="recovered" /> Recovered
            <input name="status" type="radio" value="deaths" /> Deaths
          </div>
          <input type="submit" />
        </form>
        
          <div>
            <h2> patients who tested positive </h2>
            {patients.filter(patient => patient.status == "positive").map(patient => <div>
              <li> {patient.name}</li>
              <li> {patient.surname}</li>
            </div>)}
          </div>
          <div>
            <h2> patients who tested negative </h2>
            {patients.filter(patient => patient.status == "negative").map(patient => <div>
              <li> {patient.name}</li>
              <li> {patient.surname}</li>
            </div>)}
          
        </div>
        total of negative patients : {patients.filter(patient => patient.status == "negative").length}
      </div>
    );
  }
}

export default App;
