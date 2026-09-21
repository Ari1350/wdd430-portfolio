import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          Hello, I&apos;m a Computer Engineering Student
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          Welcome to my WDD430 portfolio. This website showcases my projects
          and my progress in web development.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">My Projects</h2>
        <ProjectList />
      </section>
    </div>
  );
}