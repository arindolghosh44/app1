import './App.css';
import RegisterPage from './component/RegisterPage';
import "bootstrap/dist/css/bootstrap.css";
import ReuseUi from './component/ReuseUi';
import Employee from './component/Employee';
import StateDemo from './component/state/StateDemo';
import Profile from './component/state/Profile';
import Parent from './component/prox/Parent';
import A from './component/prox/A';
import Parent1 from './component/ContextAPI/Parent1';
import Login from './component/ConditionalRendering/Login';
import Register from './component/ConditionalRendering/Register';
import Main from './component/ConditionalRendering/Main';
function App() {

 
  return (
    <div className="App">
     <h2 className='mt-3 text-primary'>React Application</h2>

    
  <Main/>
    </div>
  );
}

export default App;
