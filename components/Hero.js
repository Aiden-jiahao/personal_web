import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
   <div className=" max-w-6xl mx-auto">
     <h1 className="text-5xl text-center font-bold md:text-7xl md:text-left">The Story So Far</h1>
     <p className="text-xl mt-5 px-5">Coding isn’t just 0/1,  it is the digital ART I am building on. 
</p> 
<p className="text-xl mt-5 px-5">Starting from the freshman year of university, after learning the C language, I discovered that the code allows me to see the big picture from the small.  From the moment I produced "Hello world" in the console of my first application, I knew I was hooked into the world of software developer. But software engineering  has never been "just a job" for me, it's offered me an engaging challenge to continually learn and improve my skills in creating high quality software. What started with a simple "Hello world" has become a full-fledged passion that only gets exciting as the years go by.
</p> 

<p className="text-xl mt-5 px-5 justify-items-start">Learning is a process of growth, and it can never be stopped. Stay Hungry. Stay Foolish.
</p>

<h1 className="mx-5 bg-red-500 text-xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 ">Tech Stack</h1>

{/* Tech Stack Image*/}
<div className="flex flex-row flex-wrap mt-8 mx-5 gap-10">
        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
          <Image
            alt="JavaScript icon"
            src="/Icons/JavaScript.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>
        
        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://reactjs.org/" >
          <Image
            alt="React icon"
            src="/Icons/React.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://redux.js.org/" >
          <Image
            alt="Redux icon"
            src="/Icons/redux.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>


        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://nextjs.org/docs/getting-started" >
          <Image
            alt="Next icon"
            src="/Icons/Next.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://devdocs.io/c/" >
          <Image
            alt="c language icon"
            src="/Icons/c.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://firebase.google.com/" >
          <Image
            alt="firebase icon"
            src="/Icons/firebase.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" >
          <Image
            alt="html icon"
            src="/Icons/html.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://www.w3.org/Style/CSS/Overview.en.html" >
          <Image
            alt="css icon"
            src="/Icons/css.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://mui.com/zh/" >
          <Image
            alt="MaterialUI icon"
            src="/Icons/MaterialUI.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>

        <div className="cursor-pointer hover:scale-110 duration-200">
          <Link href="https://tailwindcss.com/" >
          <Image
            alt="tailwind icon"
            src="/Icons/tailwind.JPG"
            height={75}
            width={75}
          />
          </Link>
        </div>
        </div>
   </div>
  );
}


