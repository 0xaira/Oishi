import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import ImageSlider from "./Components/imageSLider.jsx"; 


const App = () => {
  return (
    <>
      <Header />
      {/* <ImageSlider/> */}
      <Body />
      <Footer />
    </>
  );
};

export default App;
