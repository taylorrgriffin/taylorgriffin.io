import React from 'react';

const ProjectPreview = ({ title, img, description }) => {
  return (
    <div style={styles.container}>
      Placeholder text
    </div>
  );
}

let styles = {
  container: {
    fontSize: '20px',
    width: '20vw',
    height: '20vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    border: '2px solid black',
    marginBottom: '10vh'
    // fontSize: 'calc(8px + 2vmin)',
  },
}

export default ProjectPreview;