import React from "react";
import Navbar from "~/components/navbar.js";

export default async function Portfolio() {
  return (
    <main>
        <Navbar />
      <div className="bg-gradient-to-t from-white to-slate-400">
        <div className="container mx-auto">
          <h1 className="text-6xl font-black py-6">Portfolio Page.</h1>
        </div>
      </div>
    </main>
  );
}