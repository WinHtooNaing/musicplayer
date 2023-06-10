import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Page from "./components/Page";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Musicplayer from "./components/Musicplayer";

function App() {
  const location = window.location;
  return (
<BrowserRouter>
{location.pathname === '/musicplayer' ? null : <NavBar />}
    
    <Routes >
      <Route  path="/home"  exact  element={<Home/>}/>
      <Route path="/news"    element={<News/>}/>
      <Route path="/help"    element={<Help/>}/>
      <Route path="about"  element={<About/>}/>
      <Route path="page"  element={<Page/>}/>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signin"  element={<Signin/>}/>
      <Route path="/musicplayer"  element={<Musicplayer/>} />
      
    </Routes>
    
</BrowserRouter>

  );
}

export default App;
