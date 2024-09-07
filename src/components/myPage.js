import React from "react";
import Footer from './Footer';
import Header from './Header';
import MainBody from './MainBody';
import '../index.css';

 function MyPage() {
    return (
        <div className="container">
        <Header/>
        <MainBody/>
        <Footer/>
    </div>
    );
  }
  
  export default MyPage;
  
