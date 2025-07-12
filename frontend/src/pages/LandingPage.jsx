import React from 'react';
import Header from '../Components/Landing Page/Header.jsx';
import ImageGallery from '../Components/Landing Page/ImageGallery.jsx';
import WomenNewArrivals from '../Components/Landing Page/WomenArrivals.jsx';
import Cards from '../Components/Landing Page/Cards.jsx';
import VideoPlayerInterface from '../Components/Landing Page/VideoPlayerInterface.jsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <ImageGallery />
      <WomenNewArrivals />
      <Cards />
      <VideoPlayerInterface />
    </>
  );
};

export default HomePage;
