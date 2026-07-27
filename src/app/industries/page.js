import Link from "next/link";
import Header from "../components/Header";
import { servicesColumns } from "../lib/navigationData";
export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
          <Header />
    <main className="mx-auto max-w-5xl px-6 py-20">
        
      <h1 className="mb-4 text-4xl font-extrabold text-zinc-900">Industries</h1>
      <p className="text-lg text-zinc-600">Page content coming soon.</p>
    </main>
    </div>
  );
}