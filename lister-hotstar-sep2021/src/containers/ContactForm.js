import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {

  handleContactSubmit = (event) => {
    event.preventDefault();
    console.log('Before Submitting...');
    // 1. Read form Data from inputs
    console.log(this.nameInput.value);
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    /// 2. preparing object to send to the REST API over AJAX Call
    const formData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      phone: this.phoneInput.value
    }

    console.log(formData);

    // 3. Send the above formData -- AJAX Call
    // 3.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 3.2. What's the Data? formData
    // 3.3. What's the HTTP Method? POST 
    // 3.4. What's the REST API Client Tool?  axios / Fetch

    axios.post('https://jsonplaceholder.typicode.com/users', formData)
      .then( (res) => { // upon successful ajax call
        console.log(res);
        if(res && res.status === 201){
          alert('Saved Successfully!');
        }
      })
      .catch( (err) => { // in case of error
        console.log(err);
      })
      .finally( () => { // this will be called at last irrespective of success / error
        console.log('It is over!');
      });

  }

  render() {
    return (
      <div className="row">
        <h2>Contact us | Forms, Ref's and AJAX Call</h2>
        <form className="col-md-4 offset-md-4" onSubmit={this.handleContactSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" 
            ref={ (inputEl) => { this.nameInput = inputEl } }/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail" 
            ref={ (inputEl) => { this.emailInput = inputEl } }/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="exampleInputPhone"
            ref={ (inputEl) => { this.phoneInput = inputEl } }/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }
}

export default ContactForm;
