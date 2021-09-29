// class comp can have lifecycle hooks
// React JS v 16.8+ enables fn components to have life cycle equivalents 

import React, { Component } from 'react'

class LatestNews extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
    console.log('===========1. INSIDE CONSTRUCTOR==========');
    // initial state data
    this.state = {
      date: new Date(),
      newsItems: []
    };
  }

  componentDidMount(){ // lifecycle hook
    // this will be called after the rendering is over
    // will be called once when the comp comes into view
    // this is the ideal place for you to send ajax calls
    // you can use setState() method to update the state
    this.setState({
      date: new Date()
    })

    console.log('===========3. INSIDE componentDidMount =========');
  }

  shouldComponentUpdate(){
    console.log('=============4. shouldComponentUpdate =========');
    // ideal place to decide whether render should be called or not.
    
    // if the prevState !== newState -- return true; else return false
    return true;
  }

  componentDidUpdate(){
    // after the comp is re-rendered upon state change -- this will be called
    console.log('============6. shouldComponentUpdate =========');
  }

  componentWillUnmount(){
    // this will be called when the comp goes out of view
    // ideal place for you to clear intervals, timeouts, clear unnecessary data
    console.log('=========== AT THE END -- INSIDE componentWillUnmount');
  }

  render() {
    console.log('===========2 / 5 INSIDE render ==========');
    return (
      <div>
        <h2>Updated On | {this.props.feature}</h2>
        <p className="text-center">Updated On: {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default LatestNews;