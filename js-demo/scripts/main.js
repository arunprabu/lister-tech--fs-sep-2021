"use strict";
// External JavaScript
var x = 100;
var a = 10;
var b = 20;
var c = 30;

var profile = {
  // property: value
  firstName: 'Arun',
  lastName: 'Vj',
  city: 'New York',
  age: 25,
  address: {
    doorNo: 999,
    street: 'Wall street',
    city: 'New York',
    zip: 23453
  }
}

//var btn = document.getElementById("dispatchBtn2"); // using it for event handling

console.log('External Scripting Works');

function handleDispatchIt(event){

  console.log(this);

  console.log(event);
  alert('Dispatching it from external script ....');
}

// attaching event thru js
// btn.onclick = function(){ // callback fn
//   console.log('dispatched');
// }

// btn.addEventListener('mouseover', function(){
//   console.log('dispatched on hover');
// });

