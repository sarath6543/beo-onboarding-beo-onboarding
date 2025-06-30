import React, { useState } from "react";
import TopBar from "../../beolayer/layout/TopBar";
import LeftSideAppContainer from "../../beolayer/layout/LeftSideAppContainer";
import PageContainer from "../../beolayer/layout/PageContainer";
import BottomBar from "../../beolayer/layout/BottomBar";
import { useNavigate } from "react-router-dom";
import image_test from "../../assets/image_test.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const steps = [
    { label: 'Review & Accept offer', status: 'Completed' },
    { label: 'BGV document submission', status: 'InProgress' },
    { label: 'Pre joining formalities', status: 'Yet to start' },
    { label: 'Your day 1', status: 'Yet to start' },
  ];

  const tiles = [
    {
      title: 'Your Onboarding Process',
      image: image_test,
      path: '/onboarding',
    },
    {
      title: 'Policies',
      image: image_test,
      path: '/policies',
    },
    {
      title: 'Know your Buddy',
      image: image_test,
      path: '/buddy',
    },
    {
      title: 'Locations',
      image: image_test,
      path: '/locations',
    },
    {
      title: 'Life at BEO',
      image: image_test,
      path: '/life-at-beo',
    },
  ];

  const handleTileClick = (tile) => {
    if (tile.path) {
      navigate(tile.path);
    }
  };

  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f3f3f3',
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
    },
    content: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    leftBox: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      flex: 1,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    heading: {
      marginBottom: '15px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    statusBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '6px',
      backgroundColor: '#f0f0f0',
    },
    status: {
      fontSize: '0.9em',
      padding: '4px 10px',
      borderRadius: '12px',
      textTransform: 'capitalize',
    },
    completed: {
      backgroundColor: '#2ecc71',
      color: '#fff',
    },
    inProgress: {
      backgroundColor: '#e67e22',
      color: '#fff',
    },
    yetToStart: {
      backgroundColor: '#bbb',
      color: '#fff',
    },
    tilesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 2,
      marginLeft: '20px',
    },
    tilesGrid: {
      display: 'flex',
      gap: '20px',
    },
    leftTiles: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '20px',
      flex: 2,
    },
    rightTile: {
      flex: 1,
      height: '100%',
    },
    tileBox: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '15px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      textAlign: 'center',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    tileImage: {
      maxWidth: '100%',
      height: '100px',
      objectFit: 'contain',
      marginBottom: '10px',
    },
    newsTile: {
      marginTop: '20px',
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      flex: 'none',
      height: '100px',
    },
  };

  const getStatusStyle = (status) => {
    if (status === 'Completed') return styles.completed;
    if (status === 'InProgress') return styles.inProgress;
    return styles.yetToStart;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <PageContainer>
          <div style={styles.container}>
            <h2 style={styles.title}>Onboarding</h2>
            <div style={styles.content}>
              <div style={styles.leftBox}>
                <h3 style={styles.heading}>Let's Get You Settled In!</h3>
                <ul style={styles.list}>
                  {steps.map((step, idx) => (
                    <li key={idx} style={styles.statusBox}>
                      <span>{step.label}</span>
                      <span style={{ ...styles.status, ...getStatusStyle(step.status) }}>
                        {step.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={styles.tilesWrapper}>
                <div style={styles.tilesGrid}>
                  <div style={styles.leftTiles}>
                    {tiles.slice(0, 4).map((tile, index) => (
                      <div key={index} style={styles.tileBox} onClick={() => handleTileClick(tile)}>
                        <img src={tile.image} alt={tile.title} style={styles.tileImage} />
                        <h4>{tile.title}</h4>
                      </div>
                    ))}
                  </div>
                  <div style={styles.rightTile}>
                    <div style={styles.tileBox} onClick={() => handleTileClick(tiles[4])}>
                      <img src={tiles[4].image} alt={tiles[4].title} style={styles.tileImage} />
                      <h4>{tiles[4].title}</h4>
                    </div>
                  </div>
                </div>

     
                <div style={styles.newsTile}>
                  <strong>Important news</strong>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <BottomBar />
    </div>
  );
};

export default Dashboard;
