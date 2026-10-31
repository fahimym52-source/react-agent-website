import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

import web1 from "../../assets/Images/PortfolioImage/1 web.jpg";
import web2 from "../../assets/Images/PortfolioImage/2 web.jpg";
import web3 from "../../assets/Images/PortfolioImage/3 web.jpg";
import web4 from "../../assets/Images/PortfolioImage/4 web.jpg";
import web5 from "../../assets/Images/PortfolioImage/5 web.jpg";
import web6 from "../../assets/Images/PortfolioImage/6 web.jpg";
import web7 from "../../assets/Images/PortfolioImage/7 web.jpg";
import web8 from "../../assets/Images/PortfolioImage/8 web.jpg";
import web9 from "../../assets/Images/PortfolioImage/9 web.jpg";

import graph1 from "../../assets/Images/PortfolioImage/1 graphic.jpg";
import graph2 from "../../assets/Images/PortfolioImage/2 graphic.jpg";
import graph3 from "../../assets/Images/PortfolioImage/3 graphic.jpg";
import graph4 from "../../assets/Images/PortfolioImage/4 graphic.jpg";
import graph5 from "../../assets/Images/PortfolioImage/5 graphic.jpg";
import graph6 from "../../assets/Images/PortfolioImage/6 graphic.jpg";
import graph7 from "../../assets/Images/PortfolioImage/7 graphic.jpg";
import graph8 from "../../assets/Images/PortfolioImage/8 graphic.jpg";
import graph9 from "../../assets/Images/PortfolioImage/9 graphic.jpg";

import brand1 from "../../assets/Images/PortfolioImage/brand1.jpg";
import brand2 from "../../assets/Images/PortfolioImage/brand2.jpg";
import brand3 from "../../assets/Images/PortfolioImage/brand3.jpg";
import brand4 from "../../assets/Images/PortfolioImage/brand4.jpg";
import brand5 from "../../assets/Images/PortfolioImage/brand5.jpg";
import brand6 from "../../assets/Images/PortfolioImage/brand6.jpg";
import brand7 from "../../assets/Images/PortfolioImage/brand7.jpg";
import brand8 from "../../assets/Images/PortfolioImage/brand8.jpg";
import brand9 from "../../assets/Images/PortfolioImage/brand9.jpg";

const projects = [
  // Web Design - 9 projects
  {
    id: 1,
    title: "Southwest",
    category: "Web Design",
    label: "Website Design",
    image: web1,
  },
  {
    id: 2,
    title: "Web Project 2",
    category: "Web Design",
    label: "Website Design",
    image: web2,
  },
  {
    id: 3,
    title: "Web Project 3",
    category: "Web Design",
    label: "Website Design",
    image: web3,
  },
  {
    id: 4,
    title: "Web Project 4",
    category: "Web Design",
    label: "Website Design",
    image: web4,
  },
  {
    id: 5,
    title: "Web Project 5",
    category: "Web Design",
    label: "Website Design",
    image: web5,
  },
  {
    id: 6,
    title: "Web Project 6",
    category: "Web Design",
    label: "Website Design",
    image: web6,
  },
  {
    id: 7,
    title: "Web Project 7",
    category: "Web Design",
    label: "Website Design",
    image: web7,
  },
  {
    id: 8,
    title: "Web Project 8",
    category: "Web Design",
    label: "Website Design",
    image: web8,
  },
  {
    id: 9,
    title: "Web Project 9",
    category: "Web Design",
    label: "Website Design",
    image: web9,
  },

  // Graphic Design - 9 projects
  {
    id: 10,
    title: "Explore",
    category: "Graphic Design",
    label: "Graphic Design",
    image: graph1,
  },
  {
    id: 11,
    title: "Graphic Project 2",
    category: "Graphic Design",
    label: "Illustration",
    image: graph2,
  },
  {
    id: 12,
    title: "Graphic Project 3",
    category: "Graphic Design",
    label: "Illustration",
    image: graph3,
  },
  {
    id: 13,
    title: "Graphic Project 4",
    category: "Graphic Design",
    label: "Graphic Design",
    image: graph4,
  },
  {
    id: 14,
    title: "Graphic Project 5",
    category: "Graphic Design",
    label: "Photography",
    image: graph5,
  },
  {
    id: 15,
    title: "Graphic Project 6",
    category: "Graphic Design",
    label: "Graphic Design",
    image: graph6,
  },
  {
    id: 16,
    title: "Graphic Project 7",
    category: "Graphic Design",
    label: "Illustration",
    image: graph7,
  },
  {
    id: 17,
    title: "Graphic Project 8",
    category: "Graphic Design",
    label: "Graphic Design",
    image: graph8,
  },
  {
    id: 18,
    title: "Graphic Project 9",
    category: "Graphic Design",
    label: "Photography",
    image: graph9,
  },

  // Branding - 9 projects
  {
    id: 19,
    title: "Lines",
    category: "Branding",
    label: "Branding",
    image: brand1,
  },
  {
    id: 20,
    title: "Finish",
    category: "Branding",
    label: "Identity",
    image: brand2,
  },
  {
    id: 21,
    title: "Brand Project 3",
    category: "Branding",
    label: "Branding",
    image: brand3,
  },
  {
    id: 22,
    title: "Brand Project 4",
    category: "Branding",
    label: "Identity",
    image: brand4,
  },
  {
    id: 23,
    title: "Brand Project 5",
    category: "Branding",
    label: "Branding",
    image: brand5,
  },
  {
    id: 24,
    title: "Brand Project 6",
    category: "Branding",
    label: "Identity",
    image: brand6,
  },
  {
    id: 25,
    title: "Brand Project 7",
    category: "Branding",
    label: "Branding",
    image: brand7,
  },
  {
    id: 26,
    title: "Brand Project 8",
    category: "Branding",
    label: "Identity",
    image: brand8,
  },
  {
    id: 27,
    title: "Brand Project 9",
    category: "Branding",
    label: "Branding",
    image: brand9,
  },
];

const filters = ["All", "Web Design", "Graphic Design", "Branding"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="min-h-screen py-18 text-center bg-light ">
      <h2 className="text-4xl  font-bold mb-5">Portfolio</h2>
      <p className="text-muted italic mb-10">
        A collection of projects I've worked on
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full border transition duration-300 ${
              activeFilter === filter
                ? "bg-primary text-dark border-yellow-400"
                : "hover:bg-primary hover:text-dark hover:border-yellow-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto   px-4">
        {filteredProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            category={project.label}
            image={project.image}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-3 text-3xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-5 max-h-96 w-full rounded object-cover"
            />
            <h3 className="mb-2 text-2xl font-bold text-dark">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600">Category: {selectedProject.label}</p>

            <p className="mb-4 text-sm leading-6 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              fugit quasi voluptate fugiat assumenda nulla ipsam voluptatem
              facere necessitatibus, earum nesciunt blanditiis, quo aperiam
              cumque esse quod eveniet non iusto..
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
