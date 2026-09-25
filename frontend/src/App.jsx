import {Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  {/* If someone visits localhost:5173/, send them straight to signup */}
      </Routes>
  );
}

export default App;