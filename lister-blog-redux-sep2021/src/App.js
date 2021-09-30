import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container" style={{marginTop: '80px'}}>
          
          <Switch>
            {/* Configure the routes */}
            <Route path='/' component={Home} exact/>
            <Route path='/blog' component={Blog} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
