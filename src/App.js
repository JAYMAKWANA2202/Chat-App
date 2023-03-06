import "./Style/App.css";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="herder-part">
        <Navbar />
      </div>
      <div className="main-content">main Content</div>
      <div className="footer-part">Footer</div>
    </div>
  );
}

export default App;
