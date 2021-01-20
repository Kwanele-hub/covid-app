import React, {useReducer  ,useState} from 'react';

import './App.css';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function App(){
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);


    const handleSubmit = event =>{
        event.preventDefault();
        setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
    }
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
   
    return (
        <div className='Wrapper'>
            <h1>COVID APP TEST</h1>{submitting &&
       <div>Submtting Form...</div>
     }
     
            <form onSubmit={handleSubmit}>
                <fieldset>
            <input type='text' name='name' placeholder='name'  onChange={handleChange} />
            <input type='text' name='surname' placeholder='surname' onChange={handleChange} />
            <input  type='radio' name='status' value='positive'  />positive
            <input type='radio' name='status' value='negative' />negative
            <input type='radio' name='status' value='recovered' />recovered
            <input type='radio' name='status' value='deaths' />deaths
            </fieldset>


            
            <button type="submit">Submit</button>
            <div>
     <ul>
           {patients.filter(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
     </div>

            </form>

        </div>
    )
}
// class App extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       name: "", surname: "", status: "", patients: []
//     }
//   }

//   savePatientDetails(e) {
//     e.preventDefault();
//     const { name, surname, status, patients } = this.state;
//     this.setState({ patients: [...patients, { name, surname, status }] })
//     console.log(this.state)
//   }
  


//   saveStatus(e) {
//     this.setState({ status: e.target.value })
//   }


  

//   handleChange(e) {
//     console.log(e.target.name, e.target.value)
//     this.setState({ [e.target.name]: e.target.value })
//   }


//   render() {
//     const { name, patients, surname } = this.state
//     return (
//       <div className="App">
//         <h1> COVID APP TEST</h1>
//         <form onSubmit={(e) => this.savePatientDetails(e)}>
//           <input type="text" onChange={(e) => this.handleChange(e)} name="name" placeholder="name" value={name} />
//           <input type="text" onChange={(e) => this.handleChange(e)} name="surname" placeholder="surname" value={surname} />
//           <div style={{ display: "inline" }} onChange={(e) => this.saveStatus(e)}>
//             <input name="status" type="radio" value="positive" /> Positive
//             <input name="status" type="radio" value="negative" /> Negative
//             <input name="status" type="radio" value="recovered" /> Recovered
//             <input name="status" type="radio" value="deaths" /> Deaths
//           </div>
//           <input type="submit" />
//         </form>
//         <div className="grid-container">
//           <div>
//             <h2>Positive patients </h2>
//             {patients.filter(patient => patient.status == "positive").map(patient => <div>
//                {patient.name}
//                {patient.surname}
//             </div>)}
//           </div>
//           <div>
//             <h2>Negative patients </h2>
//             {patients.filter(patient => patient.status == "negative").map(patient => <div>
//                {patient.name}
//                {patient.surname}
//             </div>)}
          
//         </div>
        
//         <div>
//             <h2>Recovered patients </h2>
//             {patients.filter(patient => patient.status == "recovered").map(patient => <div>
//                {patient.name}
//                {patient.surname}
//             </div>)}
          
//         </div>
//         <div>
//             <h2>Died patients  </h2>
//             {patients.filter(patient => patient.status == "deaths").map(patient => <div>
//                {patient.name}
//                {patient.surname}
//             </div>)}
          
//         </div>

        


//         <h3>negative patients : {patients.filter(patient => patient.status == "negative").length}</h3>
//         <h3>positive patients : {patients.filter(patient => patient.statnj== "")}</h3>

//       </div>
//       </div>
//     );
//   }
// }

export default App;
