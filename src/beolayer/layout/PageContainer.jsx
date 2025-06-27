import React from "react";

export default function PageContainer({ title = "Page Content", children }) {
  return (
    <section className="flex-1 p-5 bg-gray-100 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}
