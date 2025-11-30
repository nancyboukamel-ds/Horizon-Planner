import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginComponent from './interfaces/LoginForm/LoginForm.jsx';
import RegisterComponent from './interfaces/LoginForm/RegisterForm.jsx';
import ProtectedRoute from './interfaces/LoginForm/ProtectedRoute';
import ConfirmSignUp from './interfaces/LoginForm/ConfirmForm.jsx';
import Dashboard from './interfaces/dashboard/dashboard.jsx';
import { signOut } from "aws-amplify/auth";

const DashboardComponent = () => (
    <div style={{ padding: '50px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
        <h2>Welcome to the Dashboard! </h2>
        <p>You have successfully logged in via AWS Cognito.</p>
        <button onClick={() => signOut().then(() => window.location.href = "/")}>
          Logout
        </button>
    </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginComponent/>} />
        <Route path='/register' element={<RegisterComponent/>} />
        <Route path='/confirm' element={<ConfirmSignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;