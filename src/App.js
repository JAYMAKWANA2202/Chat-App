import "./Style/App.css";
import Navbar from "./Component/Navbar/Navbar";
import Router from "./Utilities/Router";

function App() {
  return (
    <div className="App">
      <div className="herder-part">this is the navbar</div>
      <div className="main-content">
        <Router />
      </div>
      <div className="footer-part">Footer</div>
    </div>
  );
}

export default App;
