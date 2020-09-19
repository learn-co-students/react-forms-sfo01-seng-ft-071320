import React from 'react';

// import DisplayData from './DisplayData'

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }
  // We don't have a server to send our data to, but to demonstrate submission, we could modify our Form component to list out submissions, storing them in state:

  handleFirstNameChange = event => {
    
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    // debugger

    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray}) 
  }

  listOfSubmissions = () =>{
    
    return this.state.submittedData.map(data =>{
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div> 
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit" value="Submit" />
      </form>
      {this.listOfSubmissions()}
      </div>

    )
  }
}

export default Form;