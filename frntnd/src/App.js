import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from "./page/Home.js";
import MovieList from './components/movieLIst/ContentList';
import Content from './page/contentDetail/Content';
import NavBar from './components/navBar/NavBar';
import AdminLogin from './components/login/AdminLogin';
import UserLogin from './components/login/UserLogin';



function App() {
  
  return (
    <div className="App" style={{display:'flex', flexDirection:'column'}}>
      
           <div><NavBar></NavBar></div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <Router>
          <Header></Header>    
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path='movie/:id' element={<Content></Content>}></Route> 
              <Route path='movies/:type' element={<MovieList></MovieList>}></Route>
              <Route path='adminlogin' element={<AdminLogin></AdminLogin>}></Route>
              <Route path='userlogin' element={<UserLogin></UserLogin>}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
              
            </Routes>

          </Router>
            
      </div>
      );
}

      export default App;
