import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from "./components/profile/Profile"
import Messages from "./components/Messages/Messages"


function App() {
  return (
    <div >
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/users/:userId" element={< Profile />} /> 
         <Route path='/messages' element={<Messages />} />
     </Routes>
    </div>
  );
}

export default App;
