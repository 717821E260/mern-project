import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allbook from './components/Allbook';
import Card3 from './components/Card3';
import Navbar_Comp from './components/Navbar_Comp';
import Home from './components/Home';
import Login from './components/SignIn';
import Register from './components/Register';
import Readable from './components/Readable';
import AllCategory from './components/AllCategory';
import AboutMe from './components/AboutMe';

import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';


import './App.css';

import ContactUs from './components/ContactUs';

import About from './components/About';
import Blogs from './components/Blogs';
import Event from './components/Event';
import EventRegister from './components/EventRegister';
import Events1 from './components/Events1';
import Events2 from './components/Events2';

import Post from './components/Post';
import Article from './components/Article';
import Story from './components/Story';
import SignIn from './components/SignIn';


function App() {
  return (
   <>
    <Router>
        <Routes>
        <Route path='/Login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/read more' element={<Readable/>}></Route>
          <Route path='/all categories' element={<AllCategory/>}></Route>
          <Route path="/aboutme" element={<AboutMe />} />

          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/events" element={<Event/>} />
          <Route path="/eventregister" element={<EventRegister/>} />
          <Route path="/events1" element={<Events1/>} />
          <Route path="/events2" element={<Events2/>} />
          <Route path="/readable" element={<Readable/>} />
          <Route path="/Post" element={<Post/>} />
          <Route path="/article" element={<Article/>} />
          <Route path="/story" element={<Story/>} />
          <Route path="/" component={SignIn} />
        

          

        </Routes>
      </Router>

    


      </>
  );
}

export default App;