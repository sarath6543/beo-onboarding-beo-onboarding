import React from "react";

export default function PageContainer({ title = "Page Content", children }) {
  return (
    <section id="page_bg" className="flex-1 p-5 bg-white overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}
