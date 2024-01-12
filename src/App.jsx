import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./assets/components/Header";
import { GlobalProvider } from "./Context/GlobalState";
import Menu from "./assets/components/Menu";

function App() {
  return (
    <div className="container">
      <div className="row">
        <GlobalProvider>
          <Menu/>
          <Header />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
