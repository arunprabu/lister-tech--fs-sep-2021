import React, { useState } from 'react';

const Profile = () => {
  // useState() -- Hook -- will let fn comp to have state
  console.log('Program Started');
  // useState() will return array with getter and setter
  var [ personName, setPersonName ] = useState('Arun');
  console.log(personName);

  let [ age, setAge] = useState(50);
  
  const handleChangeName = () => {
    console.log('inside handleChangeName');
    setPersonName('John');
  }

  return (
    <div>
      <h2>Profile - useState() - Demo</h2>
      <p>Person Name is: {personName}</p>
      <button type="button" onClick={handleChangeName}>Change Name</button>

      <p>Age is: {age}</p>
      <button type="button" onClick={() => {
          setAge(age + 1)
      }}>Increment</button>

    </div>
  )
}

export default Profile
