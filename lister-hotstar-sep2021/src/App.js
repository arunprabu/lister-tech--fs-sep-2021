/* This is App Component */
import './App.css'; // css 
import Header from './components/Header';
import Footer from './components/Footer';
import ProgramList from './containers/ProgramList';
import ChannelList from './containers/ChannelList';

// App Comp is defined. 
function App() {
  // Comp should return JSX

  const appName = 'HotStar App!';

  return (
    /* JSX -- not HTML  */
    <div>
      <Header projectName={appName}></Header>
      <div className="container-fluid" style={{marginTop:`80px`}}>
        <h1>My Hotstar App!</h1>
        <div className="container">
          <ProgramList />
          <hr />
          <ChannelList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// App Comp is exported. So that other files can import and use
export default App;
