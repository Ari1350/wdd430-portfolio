interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}