import React from "react";

export default async function Home() {
  return (
    <main>
      <div className="bg-gradient-to-t from-white to-slate-400">
        <div className="container mx-auto">
          <p className="text-6xl font-black text-center py-80 px-20 bg-white bg-opacity-50">My Name is Greg Creamer.</p>
          <p className="text-2xl font-bold">This is my about page.</p>
          <div className="w-full h-screen"></div>
          <p>This is just some text to make the page longer so you have to scroll...</p>
        </div>
      </div>
    </main>
  );
}