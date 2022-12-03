import "./App.css";
import Home from "./pages/Home";
import Messages from "./components/Header/Messages/Messages";

function App() {
  return (
    <div style={{width:"100%", height:"100%"}}>
      <Home />
      <Messages />
    </div>
  );
}

export default App;
