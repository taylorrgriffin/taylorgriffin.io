import React from 'react';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

import xv6 from '../assets/xv6.jpg';
import HALE from '../assets/HALE.png';
import taylorgriffin from '../assets/taylorgriffin.svg';

import BeerbookPreview from '../assets/Beerbook_Preview.png';

import ProjectPreview from './ProjectPreview';

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 601px)' })
  const styles = style(isTabletOrMobile);
  return (
    <div style={styles.gridContainer}>
      <Grid container style={styles.container} spacing={3}>
        <ProjectPreview
          img={HALE}
          route="HALE"
          backgroundColor="white"
          title="High Altitude Liquid Engine"
          description="Multidisciplinary capstone project in collaboration with the Oregon State University American Institute of Aeronautics and Astronautics" />
        {/* <ProjectPreview
          img={BeerbookPreview}
          backgroundColor="white"
          // stretch={true}
          route="Beerbook"
          title="Beerbook"
          description="Beerbook is a site to get information about all of your favorite beers, written in React for my Advanced Web Development Final"/> */}
        {/* <ProjectPreview
          route="TastyBeacon"
          backgroundColor="white"
          title="Tasty Beacon"
          description="Helping food truck vendors and patrons meet supply and demand through an easy to use find-and-order interface" />
        <ProjectPreview
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
      <ProjectPreview
        img={taylorgriffin}
        backgroundColor="white"
        route="taylorgriffinio"
        title="taylorgriffin.io"
        description="This site! A React application running on AWS."/>
      </Grid>
    </div>
  );
}

const style = isSmallSize => {
  return {
    gridContainer: {
      display: 'flex',
      padding: '15px',
      flex: 1,
      backgroundColor: '#282c34'
    },
    container: {
      paddingTop: '30px',
      paddingBottom: '30px',
      paddingLeft: '5%',
      paddingRight: '5%',
      justifyContent: isSmallSize ? 'center' : 'flex-start',
      backgroundColor: '#282c34',
    },
  }
}

export default Projects;