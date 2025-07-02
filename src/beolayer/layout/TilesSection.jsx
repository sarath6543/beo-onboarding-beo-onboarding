import React from "react";

const TilesSection = ({ tiles, onTileClick }) => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] flex-2">
      {tiles.map((tile, index) => (
        <div
          key={index}
          onClick={() => onTileClick && onTileClick(tile)}
          className="bg-white p-3 rounded-lg shadow-md flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
        >
          {tile.image && (
            <img
              src={tile.image}
              alt={tile.title}
              className="w-full h-[120px] object-cover rounded-md mb-2"
            />
          )}
          <p className="font-medium text-base mb-1">{tile.title}</p>
          <span className="text-sm text-blue-600">View more →</span>
        </div>
      ))}
    </div>
  );
};

export default TilesSection;
