import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { motion } from 'framer-motion'; // Correct import for framer-motion

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const FeaturedWebinars = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-slate-900">
      <HoverEffect items={projects} />
      {projects.map((project) => (
        <motion.div
          key={project.title}
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto bg-slate-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="text-sm text-neutral-400">{project.description}</p>
          <a href={project.link} className="text-teal-400 hover:underline mt-2">
            Learn more
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedWebinars;
