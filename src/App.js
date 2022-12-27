import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/pages/Layout";
import { Home } from "./Components/pages/Home";

import { Contact } from "./Components/pages/Contact";
import { LoginRegister } from "./Components/pages/auth/LoginRegister";
import { SendPasswordResetEmail } from "./Components/pages/auth/SendPasswordResetEmail";
import { ResetPasswordForm } from "./Components/pages/auth/ResetPasswordForm";
import { Dashboard } from "./Components/pages/Dashboard";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route  path='contact' element={<Contact/>}/>
                <Route  path='login' element={<LoginRegister/>}/>
                <Route  path='forgotpassord' element={<SendPasswordResetEmail/>}/>
                <Route  path='resetpassword/:token' element={<ResetPasswordForm/>}/>
                
            </Route>
            <Route  path='dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;
