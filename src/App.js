import Navbar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar";
import "./App.css";

import MultipleBoxes from "./component/MultipleBoxes";
function App() {
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main-content">
        <Topbar />
        <MultipleBoxes />
      </div>
    </>
  );
}

export default App;
