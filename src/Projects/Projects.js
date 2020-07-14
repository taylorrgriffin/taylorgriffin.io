import React from 'react';

import ProjectPreview from './ProjectPreview';

const Projects = () => {
  return (
    <div style={styles.container}>
      <ProjectPreview/>
      <ProjectPreview/>
      <ProjectPreview/>
      <ProjectPreview/>
      <ProjectPreview/>
      <ProjectPreview/>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'left',
    // color: 'white',
    // fontSize: 'calc(8px + 2vmin)',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    flexWrap: 'wrap',
    // textAlign: 'left',
    flex: '1 1 auto'
  },
  // heading: {
  //   textAlign: 'center'
  // },
  // link: {
  //   color: '#61DAFB',
  //   textDecoration: 'none'
  // },
}

export default Projects;