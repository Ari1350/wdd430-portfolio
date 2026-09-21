import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WDD430 Portfolio",
    description: "A portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Ari1350/wdd430-portfolio",
  },
  {
    title: "React DOM Practice",
    description: "Practice projects for learning React and web development.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export default function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}