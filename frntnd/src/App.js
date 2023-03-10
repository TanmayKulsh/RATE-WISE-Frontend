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
import UserSignUp from './components/login/UserSignUp';
import UpdateUser from './components/update/UpdateUser';
import UserProfile from './components/profile/UserProfile';
import AdminProfile from './components/profile/AdminProfile';
import ContactUs from './page/ContactUs';
import AboutUs from './page/AboutUs';
import AddArtistForm from './components/artist/AddArtist';


function App() {
  
  return (
    <div className="App" style={{display:'flex', flexDirection:'column'}}>
      
           <Router>
          <div><NavBar></NavBar></div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           
            <Header></Header>    
            <Routes>
              <Route index element={<Home></Home>}></Route>
              <Route path='movie/:id' element={<Content></Content>}></Route> 
              <Route path='movies/:type' element={<MovieList></MovieList>}></Route>
              <Route path='adminlogin' element={<AdminLogin></AdminLogin>}></Route>
              <Route path='userlogin' element={<UserLogin></UserLogin>}></Route>
              <Route path='usersignup' element={<UserSignUp></UserSignUp>}></Route>
              <Route path='userupdate' element={<UpdateUser></UpdateUser>}></Route>
              <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
              <Route path='aboutus' element={<AboutUs></AboutUs>}></Route>
              <Route path='userprofile' element={<UserProfile></UserProfile>}></Route>
              <Route path='adminprofile' element={<AdminProfile></AdminProfile>}></Route>
              <Route path='addartist' element={<AddArtistForm></AddArtistForm>}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
              
            </Routes>

          </Router>
            
      </div>
      );
}

      export default App;
