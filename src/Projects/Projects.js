import React from 'react';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import HALE from '../assets/HALE.png'
import ProjectPreview from './ProjectPreview';

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 601px)' })
  console.info(`isSmall? : ${isTabletOrMobile}`);
  const styles = style(isTabletOrMobile);
  return (
    <Grid container spacing={3} style={styles.container} justifyContent="flex-start">
      <ProjectPreview
        img={HALE}
        title="High Altitude Liquid Engine"
        description="Multidisciplinary capstone project in collaboration with the Oregon State University American Institute of Aeronautics and Astronautics"/>
      <ProjectPreview title="Placeholder 2"/>
      <ProjectPreview title="Placeholder 3"/>
      <ProjectPreview title="Placeholder 4"/>
      <ProjectPreview title="Placeholder 5"/>
    </Grid>
  );
}

const style = isSmallSize => {
  return {
    container: {
      justifyContent: 'center',
      paddingTop: '30px',
      paddingBottom: '30px',
      paddingLeft: '5%',
      paddingRight: '5%',
      justifyContent: isSmallSize ? 'center' : 'flex-start'
    },
  }
}

export default Projects;