import React from "react";
import Image from "next/image";
function Hero() {
  return (
   <div className=" max-w-6xl mx-auto">
     <h1 className="text-5xl text-center font-bold md:text-7xl md:text-left">The Story So Far</h1>
     <p className="text-xl mt-5 px-5">Coding isn’t just 0/1,  it is the digital ART I am building on. 
</p> 
<p className="text-xl mt-5 px-5">Starting from the freshman year of university, after learning the C language, I discovered that the code allows me to see the big picture from the small.  From the moment I produced "Hello world" in the console of my first application, I knew I was hooked into the world of software developer. But software engineering  has never been "just a job" for me, it's offered me an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple "Hello world" has become a full-fledged passion that only gets exciting as the years go by.
</p> 

<p className="text-xl mt-5 px-5 justify-items-start">Learning is a process of growth, and it can never be stopped. Stay Hungry. Stay Foolish.
</p>
<h1 className="mx-5 bg-red-500 text-xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Tech Stack</h1>

<div className="flex flex-row flex-wrap mt-8 mx-5 gap-4">
          <Image alt="next icon" src="/icons/next.svg" height={75} width={75} />
          <Image
            alt="react icon"
            src="/icons/react.svg"
            height={75}
            width={75}
          />
          <Image
            alt="angular icon"
            src="/icons/ang.svg"
            height={75}
            width={75}
          />
          <Image
            alt="tailwind icon"
            src="/icons/tail.svg"
            height={75}
            width={75}
          />
          <Image
            alt="material icon"
            src="/icons/material.svg"
            height={75}
            width={75}
          />
          <Image
            alt="redux icon"
            src="/icons/redux.svg"
            height={75}
            width={75}
          />
          <Image alt="sass icon" src="/icons/sass.svg" height={75} width={75} />
          <Image
            alt="javascript icon"
            src="/icons/js.svg"
            height={75}
            width={75}
          />
          <Image
            alt="html icon"
            src="/icons/html5.svg"
            height={75}
            width={75}
          />
          <Image alt="css icon" src="/icons/css3.svg" height={75} width={75} />
          <Image
            alt="firebase icon"
            src="/icons/firebase.svg"
            height={75}
            width={75}
          />
        </div>
   </div>
  );
}

export default Hero;
