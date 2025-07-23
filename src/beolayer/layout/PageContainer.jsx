import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageContainer({ title, children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="flex-1 px-[40px] py-5 bg-[#E6E6E6] overflow-y-auto min-h-0 h-full ">
     
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-normal py-2">{title}</h2>
 
        {!isHomePage && (
          <div className="text-sm text-gray-600">
          <Link to="/" className="hover:underline text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{title}</span>
        </div>
        )}
      </div>


      {children}
    </section>
  );
}
