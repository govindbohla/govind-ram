import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050816] text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mt-4 text-gray-400">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}