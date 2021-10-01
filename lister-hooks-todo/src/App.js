import './App.css';
import Profile from './components/Profile';
import UserData from './components/UserData';
import Todo from './components/Todo';

function App() {
  return (
    <div className="container">
      <h1>React Hooks</h1>
      <Profile />
      <hr />
      <UserData />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
