import React from 'react';

const Projects = () => {
  return (
    <div style={styles.container}>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    marginLeft: '10vw',
    marginRight: '10vw',
    textAlign: 'left',
    flex: '1 1 auto'
  },
  heading: {
    textAlign: 'center'
  },
  link: {
    color: '#61DAFB',
    textDecoration: 'none'
  },
}

export default Projects;