import React, { useEffect, useState } from 'react';

const UserData = () => {
  console.log('Program Started');
  const [topicName, setTopicName] = useState('Welcome to Hooks!');
  const [age, setAge] = useState(10);

  // is similar to componentDidMount()  + shouldComponentUpdate() 
  useEffect( () => {
    console.log('Inside useEffect');
    document.title = topicName;
  }, [topicName]); //second arg is dependency
  // if the dep is changed by any means, useEffect callback would be called
  // by default useEffect would be called once automatically.
  // remove dep and see

  return (
    <div>
      <h2>User Data - useEffect() Hook - Demo</h2>
      <p>Topic Name: {topicName}</p>
      <input type="text" value={topicName} 
        onChange={ (event) => { setTopicName(event.target.value)}}/>
      
      <button type="button" onClick={ () => { setAge(age + 1)}}>Increment Age</button>
    </div>
  )
}

export default UserData
