import React from 'react';
// import { useMediaQuery } from 'react-responsive';

// import HALE from '../assets/HALE.png'

import Template from '../Common/ProjectTemplate';

const ProjectHALE = () => {
  return (
    <div style={styles.container}>
      <Template
        title="High Altitude Liquid Engine"
        content="Oregon State University American Institute of Aeronautics and Astronautics"/>
    </div>
  );
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#282c34'
  },
}

export default ProjectHALE;