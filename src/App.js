import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/pages/Layout";
import { Home } from "./Components/pages/Home";
import { Contact } from "./Components/pages/Contact";
import { LoginRegister } from "./Components/pages/auth/LoginRegister";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route  path='contact' element={<Contact/>}/>
                <Route  path='login' element={<LoginRegister/>}/>
            </Route>
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
