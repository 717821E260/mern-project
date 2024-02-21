import React from 'react'
import Navbar_Comp from './Navbar_Comp'
import  Slideshow from './Slideshow'
import AuthorCards from './AuthorCards';
import AuthorList from './AuthorList';
import Album from './Album';
import Slide from './Slide';

import List from './List';
import Categories from './Categories';
import List2 from './List2';
import Blog from './Blog';

import Footer from './Footer';
import Review from './Review';

import TwoCards from './TwoCards';



export default function Home() {
  return (
    <>

  <Navbar_Comp/>
  <Slide/>

  <List/>
  <AuthorCards/>
<TwoCards/>
  <Categories/>

  <List2/>
  <Blog/>
  <Review/>
 

<Footer/>

    </>
  )
}
