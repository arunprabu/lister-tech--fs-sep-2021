/* This is App Component */
import './App.css'; // css 
import Header from './components/Header';
import Footer from './components/Footer';

// App Comp is defined. 
function App() {
  // Comp should return JSX
  return (
    /* JSX -- not HTML  */
    <div>
      <Header></Header>
      <h1>Success!!</h1>
      <Footer />
    </div>
  );
}

// App Comp is exported. So that other files can import and use
export default App;
