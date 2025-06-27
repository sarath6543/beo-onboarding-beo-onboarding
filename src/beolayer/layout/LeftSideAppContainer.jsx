import React from "react";
import { Link } from "react-router-dom";

export default function LeftSideAppContainer({ isOpen, isMobile, onClose }) {
  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={onClose}
        />
      )}
      <aside
        className={`bg-gray-100 w-64 p-5 h-full overflow-y-auto z-50 ${
          isMobile
            ? `fixed top-0 left-0 transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "relative"
        }`}
      >
        <div className="mb-10">
          <h2 className="text-lg font-bold"></h2>
        </div>
       <nav>
  <ul className="space-y-4">
    <li>
      <Link to="/page1" className="text-blue-600 hover:underline">
        home
      </Link>
    </li>
    <li>
      <Link to="/page2" className="text-blue-600 hover:underline">
        Page 2
      </Link>
    </li>
    <li>
      <Link to="/page3" className="text-blue-600 hover:underline">
        Page 3
      </Link>
    </li>
  </ul>
</nav>

      </aside>
    </>
  );
}
