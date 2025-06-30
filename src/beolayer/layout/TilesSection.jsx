import React from "react";

const TilesSection = ({ tiles, onTileClick }) => {
  const styles = {
    rightBox: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '20px',
      flex: 2,
    },
    tile: {
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '120px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    title: {
      fontWeight: '500',
      fontSize: '1rem',
      marginBottom: '6px',
    },
    viewMore: {
      fontSize: '0.9em',
      color: '#007bff',
    },
  };

  return (
    <div style={styles.rightBox}>
      {tiles.map((tile, index) => (
        <div
          key={index}
          style={styles.tile}
          onClick={() => onTileClick && onTileClick(tile)}
        >
          {tile.image && <img src={tile.image} alt={tile.title} style={styles.image} />}
          <p style={styles.title}>{tile.title}</p>
          <span style={styles.viewMore}>View more →</span>
        </div>
      ))}
    </div>
  );
};

export default TilesSection;
