import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
function about() {
  return (
    <div>
      <Header />

<div className="max-w-6xl mx-auto">
      <h1 className="text-4xl text-center font-bold md:text-5xl md:text-left"> Behind the scenes…</h1>
      <p className="text-xl mt-5 px-5"> I love to volunteer  and learn new languages, especially japanese. Volunteering outside school would enhance my civic responsibility and make me stand outside of my comfort zone.Learning a new linguistic not only gives me the ability to experience its  culture, but also makes me know a diverse way of thinking, and it is helpful in dealing with Tech problems.  
      </p>


<p className="text-xl mt-5 px-5"> After 3 years of learning Japanese, I finally won the special prize of the Ottawa Japanese Speech Competition!  Standing on stage is a very nervous thing, however every time I think that I can share my best side and best ideas with others, my nervousness disappears. I have attached my speech contest video below, I would love to share my ideas with everyone!</p>

<p className="text-xl mt-5 px-5"> Let's be friends! Connect with me via  CONTACT page.  Feel free to reach me! 
</p>
{""}
      <div className="flex grid-cols-2 gap-20 justify-center ">
        <div className="transform hover:scale-110 transition duration-200 ">
          <ReactPlayer
            url="https://youtu.be/Jk0MiqpwZoU"
            controls
            playbackRate={1}
            width="500px"
            height="300px"
          />
        </div>

        <div className="  transform hover:scale-110 transition duration-200 ease-out object-cover">
          <ReactPlayer
            url="https://youtu.be/AHRIcycjv18"
            controls
            playbackRate={1}
            width="500px"
            height="300px"
          />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
