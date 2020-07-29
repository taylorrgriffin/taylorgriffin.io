import React from 'react';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import xv6 from '../assets/xv6.jpg';
import HALE from '../assets/HALE.png';
import taylorgriffin from '../assets/taylorgriffin.svg';

import ProjectPreview from './ProjectPreview';

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 601px)' })
  const styles = style(isTabletOrMobile);
  return (
    <Grid container spacing={3} style={styles.container}>
      <ProjectPreview
        img={HALE}
        route="HALE"
        backgroundColor="white"
        title="High Altitude Liquid Engine"
        description="Multidisciplinary capstone project in collaboration with the Oregon State University American Institute of Aeronautics and Astronautics" />
      {/* <ProjectPreview
        route="TastyBeacon"
        backgroundColor="white"
        title="Tasty Beacon"
        description="Helping food truck vendors and patrons meet supply and demand through an easy to use find-and-order interface" /> */}
      {/* <ProjectPreview
        img={xv6}
        route="xv6"
        stretch={true}
        backgroundColor="black"
        title="Xv6 Operating System"
        description="A lightweight operating system written in C" /> */}
      {/* <ProjectPreview
        route="journal"
        title="Journal"
        description="A simple journal application for iOS and Android implemented with React Native, Node.js, and MongoDb" /> */}
      {/* <ProjectPreview
        img={taylorgriffin}
        backgroundColor="white"
        route="taylorgriffinio"
        title="taylorgriffin.io"
        description="This site! A react application running on AWS."/> */}
    </Grid>
  );
}

const style = isSmallSize => {
  return {
    container: {
      paddingTop: '30px',
      paddingBottom: '30px',
      paddingLeft: '5%',
      paddingRight: '5%',
      justifyContent: isSmallSize ? 'center' : 'flex-start',
      backgroundColor: '#282c34'
    },
  }
}

export default Projects;