import React from "react";

export default function BottomBar() {
  return (
    <footer className="h-14 bg-white text-black flex items-center justify-center border-t border-white">
      <p className="text-sm">© {new Date().getFullYear()} BEO-Software</p>
    </footer>
  );
}
