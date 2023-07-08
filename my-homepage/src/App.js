import './App.css';
import Navbar from './Views/Header/Navbar';
import NewBody from './Views/Body/NewBody';

function App() {
  return (
    <div>
      <div className="app">
        <div><Navbar /></div>
        <div><NewBody /></div>
      </div>
    </div>
  );
}

export default App;
