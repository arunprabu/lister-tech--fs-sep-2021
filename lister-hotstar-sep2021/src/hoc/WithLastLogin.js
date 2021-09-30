// hoc -- Higher order comp 
// wrapping comp that returns props children 
// can return multiple children tags as well
// HOC - doesn't usually render any JSX on its own
// naming convention: begins with 'With' prefix 

// For More: https://reactjs.org/docs/higher-order-components.html

const WithLastLogin = (props) => props.children;

export default WithLastLogin;
