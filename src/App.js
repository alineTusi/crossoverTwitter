import "./App.css";
import Home from "./pages/Home";
import Messages from "./components/Messages/Messages";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div style={{width:"100%", height:"100%"}}>
      <Home />
      <Messages />
     <Profile/>
    </div>
  );
}

export default App;
