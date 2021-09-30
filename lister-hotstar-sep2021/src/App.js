/* This is App Component */
import './App.css'; // css 
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ProgramList from './containers/ProgramList';
import ChannelList from './containers/ChannelList';
import TrendingShows from './containers/TrendingShows';
import Subscription from './components/Subscription';
import LatestNews from './containers/LatestNews';
import MyProfile from './containers/MyProfile';
import ContactForm from './containers/ContactForm';
import WithLastLogin from './hoc/WithLastLogin';

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
          <hr/>
          <LatestNews feature="Lifecycle Hooks" />
          <hr/>
          <MyProfile />
          <hr />
          <ContactForm />
          <hr />

          <WithLastLogin>
            <div>Wow</div>
            <div>Wow2</div>
          </WithLastLogin>

          <WithLastLogin>
            <p>Last Login: yesterday </p>
          </WithLastLogin>

          
        </div>
      </div>
      <Footer />
    </div>
  );
}

// App Comp is exported. So that other files can import and use
export default App;
