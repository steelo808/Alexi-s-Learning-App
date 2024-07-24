import React from 'react';
import Image from 'next/image';
import { Button } from "@nextui-org/button";


const page = () => {
  return (
    <div className ="main-page">
    <div className="content-wrapper text-center mt-5">
      <div className="font-bold text-7xl text-wrap purple_gradient text-center">Welcome Alexi!</div>
      <p className="text-s  font-light  text-center">Your personalized Learning Journey awaits!</p>
      <Button radius="full" className ="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer">
        Explore!
      </Button>
      <Image
          src="/Images/portrait-young-student-with-book-education-day.png" 
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
