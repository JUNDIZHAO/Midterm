import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import SignUpUser from './Components/SignUpUser/SignUpUser';

function App() {
  return (
    <div className="App">
      <h1>1-AddProduct</h1>
      {<AddProduct/>}
      <h1>2-SignUpUser</h1>
      {<SignUpUser/>}
    </div>
  );
}

export default App;
