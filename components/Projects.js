import React from "react";
import ProjectCards from "./ProjectCards";
export default function Projects() {
  const projects = [
    {
      title: "Amazon Clone",
      src: "/Amazon-clone.png",
      link: "https://amazon-aiden-jiahao.vercel.app/",
    },
    {
      title: "Netflix Clone",
      src: "/Netflix-clone.png",
      link: "https://netflix-3847d.web.app/",
    },
    {
      title: "Linkedin Clone",
      src: "/LinkedIn-clone.png",
      link: "https://linkedin-clone-yt-ebab6.web.app/?",
    },
    {
      title: "Airbnb Clone",
      src: "/Airbnb-clone.png",
      link: "https://airbnb-aiden-jiahao.vercel.app/",
    },
  ];
  return (
    <section className="bg-white dark:bg-red-800">
      <div className="bg-[#F1F1F1] dark:bg-red-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {projects.map((projects, index) => (
            <ProjectCards
              key={index}
              title={projects.title}
              src={projects.src}
              link={projects.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
