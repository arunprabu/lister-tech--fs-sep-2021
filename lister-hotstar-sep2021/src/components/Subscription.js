import React from 'react';

//Comp with internal styles and inline styles demo
const Subscription = () => {
  // Internal Styles in an Obj
  const subscriptionStyles = {
    subscriptionEnding: {
      background: 'yellow',
      border: 'dashed 2px green',
      fontSize: '26px',
      textAlign: 'center',
      padding: '20px'
    },
    renew: {
      background: 'red',
      border: 'dotted 10px yellow',
      fontSize: '26px',
      textAlign: 'center',
      padding: '30px',
      color: '#fff'
    }
  }

  return (
    <div>
      {/* Inline CSS */}
      <h2 style={{color: '#fff', background: 'grey', padding: '16px', borderRadius: '6px' }}>Subscription - Styles Demo</h2>
      <div>
        <p style={subscriptionStyles.subscriptionEnding}>Subscription Ends: 20/Oct/2021</p>
        <p style={subscriptionStyles.renew}>Renew at 50% Discount - Offer Ends Today</p>
      </div>
    </div>
  )
}

export default Subscription;
