export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t py-6 text-center text-gray-600">
      <p>© {year} My Portfolio. All rights reserved.</p>
    </footer>
  );
}