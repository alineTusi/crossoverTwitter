import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from "./components/profile/Profile"
import Messages from './components/Messages/Messages';
import Header from './components/Header/Header';


function App() {
  return (
    <div >
      <Header/>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/home' element={<Home />} />
         <Route path="/users/:userId" element={< Profile />} /> 
         <Route path="/messages" element={< Messages />} /> 
     </Routes>
    </div>
  );
}

export default App;
