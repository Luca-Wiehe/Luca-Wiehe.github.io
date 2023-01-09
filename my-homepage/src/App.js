import './App.css';
import Header from './Views/Header/Header';
import Body from './Views/Body/Body';

function App() {
  return (
    <div>
      <div className="app">
        <div className="app-header"><Header /></div>
        <div className="app-body"><Body /></div>
      </div>
    </div>
  );
}

export default App;
