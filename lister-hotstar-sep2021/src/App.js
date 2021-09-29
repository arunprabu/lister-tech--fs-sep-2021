/* This is App Component */
import './App.css'; // css 
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ProgramList from './containers/ProgramList';
import ChannelList from './containers/ChannelList';
import TrendingShows from './containers/TrendingShows';
import Subscription from './components/Subscription';

// App Comp is defined. 
function App() {
  // Comp should return JSX

  const appName = 'HotStar App!';

  return (
    /* JSX -- not HTML  */
    <div>
      <Header projectName={appName}></Header>
      <div className="container-fluid" style={{marginTop:`80px`}}>
        <h1 className="redText">My Hotstar App!</h1>
        <div className="container">
          <ProgramList />
          <hr />
          <ChannelList />
          <hr />
          <TrendingShows />
          <hr/>
          <Subscription />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

// App Comp is exported. So that other files can import and use
export default App;
