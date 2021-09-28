// class Component
import React, { Component } from 'react';
import Program from '../components/Program';

class ProgramList extends Component {

  // mandatory method within Class comp 
  render() {

    // should mandatorily return JSX
    return (
      <div>
        <h2>Program List | Props Demo</h2>

        <Program 
          name='Man Vs Wild'
          category='Infotainment'
          time='9 PM'>Wild Adventure Program on Discovery Channel</Program>

        <Program 
          name='Planet Earth'
          category='Infotainment'
          time='8 PM'>A Programme by David Attenborough on BBC Earth</Program>

        <Program
          name='IPL 2021'
          category='Sports'
          time='7 PM'>Enjoy IPL 2021 - in Star Sports</Program>

      </div>
    );
  }

}

export default ProgramList;