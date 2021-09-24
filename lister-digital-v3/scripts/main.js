
// Read form field data

function handleFormSubmit(event) {
  console.log(event);

  event.preventDefault();

  //reading inputs from form elements

  var formData = {
    firstName: document.getElementById('fName').value,
    lastName: document.getElementById('lName').value
  }

  console.log(formData); // in an object

  // AJAX 
  /* 
    1. What's the Backend - REST API URL? https://jsonplaceholder.typicode.com/users
    2. What's the Http Method? POST
    3. What's the data are we going to send? form data in JSON 
    4. What's the REST API Client? XMLHttpRequest (AJAX)  

  */

  // Completing Form Submission over AJAX
  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    console.log(this.readyState); // gives you the current state of the request 
    /*
      0: request not initialized
      1: server connection established
      2: request received
      3: processing request
      4: request finished and response is ready 
    */

    if (this.readyState == 4 && this.status == 201) { //response in ready 
      alert('Saved Successfully!'); // TODO: Show bootstrap toast 
    }
  }

  xmlHttpRequest.open('POST', 'https://jsonplaceholder.typicode.com/users')
  xmlHttpRequest.send(formData);

}