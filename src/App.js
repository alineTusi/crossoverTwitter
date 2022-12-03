import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from "./components/profile/Profile"


function App() {
  return (
    <div >
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/users/:userId" element={< Profile />} /> 
     </Routes>
    </div>
  );
}

export default App;
