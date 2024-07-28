import React from "react";
import Navbar from "~/components/navbar";

export default async function About() {
    return (
        <main>
            <Navbar />
            <div className="bg-gradient-to-t from-white to-green-600">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-black py-6">About Page</h1>
                </div>
            </div>
        </main>
    );
}