import {Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div >
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/products/:productId"> </Route>
     </Routes>
    </div>
  );
}

export default App;
