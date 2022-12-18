import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/pages/Layout";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}/>
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
