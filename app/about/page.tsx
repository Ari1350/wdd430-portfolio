import InfoCard from "@/components/InfoCard";

export default function About() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">About Me</h1>

      <p className="mb-6 text-lg text-gray-600">
        I am a Computer Engineering student interested in software development
        and web technologies.
      </p>

      <InfoCard
        title="My Goals"
        description="My goal is to continue developing my programming skills and build useful applications using modern web technologies."
      />
    </section>
  );
}