import RenderRoutes from "./Router/RenderRoutes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RenderRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
