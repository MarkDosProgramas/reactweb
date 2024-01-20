import logo from './logo.svg';
import './App.css';
import './index.js';


function App() {
  return (
    <div className="App">
     <h1>
      Testando
      {soma(2,3)}
     </h1>
    </div>
  );

  function soma(a,b){
    return a+b;
    
  }
}

export default App;
