import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    //because we don't have a server to send data, to demostrate submission, we are using an array and storing it in state.
    submittedData: []
  }

  handleFirstNameChange = event => {
    //here we are updating the state based on event.target.value, which causes a re-render and the cycle completes.
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    //here we are putting together the current form data using the values store in state
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName}

    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submitttedData: dataArray})

    //when this form gets submitted it should send the data somewhere.
    // this.sendFormDataSomewhere(formData)
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
    return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
          {/* now that we are controlling the form with state, we want to set up a way to submit the form. So,
          we create a new event onSubmit.. whenever enter is pressed an anonymous function is called,
          event => this.handleSubmit(event) */}
          <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
            <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
            <input type="submit" />
          </form>
          {this.listOfSubmissions()}
        </div>
    )
  }
}

export default Form;