import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginComponent from './interfaces/LoginForm/LoginForm.jsx';
import RegisterComponent from './interfaces/LoginForm/RegisterForm.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route for the Login Form - usually the root path */}
        <Route path='/' element={<LoginComponent/>} />
        
        {/* Route for the Register Form */}
        <Route path='/register' element={<RegisterComponent/>} />
      </Routes>
    </div>
  );
}

export default App;