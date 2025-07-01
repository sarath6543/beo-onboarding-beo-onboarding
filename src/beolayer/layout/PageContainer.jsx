import React from "react";
import { Link } from "react-router-dom";

export default function PageContainer({ title, children }) {
  return (
    <section className="flex-1 p-5 bg-[#DCDCDC] overflow-y-auto min-h-0 h-full">
      <div className="flex items-center justify-between mb-4">
     
        <h2 className="text-xl font-semibold">{title}</h2>

 
        <div className="text-sm text-gray-600">
          <Link to="/" className="hover:underline text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{title}</span>
        </div>
      </div>

      {children}
    </section>
  );
}
