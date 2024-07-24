import React from 'react';
import Image from 'next/Image';


const page = () => {
  return (
    <div className ="main-page">
    <div className="content-wrapper">
      <div className="font-bold text-8xl text-wrap purple_gradient text-center">Welcome Alexi!</div>
      <p className="text-s underline decoration-2 decoration-purple-500/30 font-light  text-center">Your personalized Learning Journey awaits!</p>
      {/* <button type="button" className="btn text-center">Explore!</button> */}
      <Image
          src="/Images/home-page-3d-img.png"
          width={800}
          height={800}
          alt="3d image of black woman sitting on couch"
          className="home-3d-image" />
      </div>
      {/* <Image
          src="/Images/home-page-3d-img.png"
          width={800}
          height={800}
          alt="3d image of black woman sitting on couch"
          className="home-3d-image" /> */}
    </div>
  );
}

export default page;
