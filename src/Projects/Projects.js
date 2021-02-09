import React from 'react';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faBeer, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';

import { BACKGROUND } from '../styles/colors';

import HALE from '../assets/HALE.png';
// import TB from '../assets/tastybeacon-cropped.png';
import AST from '../assets/python.png';
// import taylorgriffin from '../assets/taylorgriffin.svg';

// import BeerbookPreview from '../assets/beer_mug.png';

import ProjectPreview from './ProjectPreview';

// const Icon = ({ name }) => (
//   <FontAwesomeIcon
//     icon={name}
//     style={{
//       alignSelf: 'center',
//       fontSize: '100px',
//       color: 'tomato'
//     }} />
// );

// const BeerIcon = () => (<Icon name={faBeer}/>)
// const RocketIcon = () => (<Icon name={faRocket}/>);
// const JournalIcon = () => (<Icon name={faBook}/>);
// const PortraitIcon = () => (<Icon name={faUser}/>);

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 601px)' })
  const styles = style(isTabletOrMobile);
  return (
      <Grid container style={styles.container} spacing={3}>
        <ProjectPreview
          route="HALE"
          heading="High Altitude Liquid Engine"
          caption={`Sensor data pipeline for liquid engine testing apparatus.
          Developed for Oregon State University American Insitute of 
          Aeronautics and Astronautics.`}
          img={HALE}
        />
        <ProjectPreview
          route="python-ast"
          heading="Python Abstract Syntax Tree Visualizer"
          caption={`Generate abstract syntax tree from simple Python Syntax.
          Written in C++ using Bison and Flex. Click learn more to try it out for yourself!`}
          img={AST}
          repo={'https://github.com/taylorrgriffin/python-ast'}
        />
        {/* <ProjectPreview
          route="tastybeacon"
          heading="Tasty Beacon"
          caption={`Helping food truck vendors and patrons meet supply and demand through an easy to use find-and-order interface.
          React Native application available on iOS and Android.`}
          img={TB}
        />
        <ProjectPreview
          route="journal"
          heading="Journal App"
          caption={`Simple journal application created with React Native and Expo, available for iOS and Android.
          Supports creating, editing, and deleting notes. Consumes Node.js backend, powered by MongoDB.`}
          repo={`https://github.com/taylorrgriffin/JournalApp`}
        /> */}
        {/* <ProjectPreview
          route="HALE"
          title="High Altitude Liquid Engine"
          // Icon={RocketIcon}
          labels={['Python', 'Javascript', 'Node.js', 'MongoDB']}
          description="Sensor data pipeline for liquid engine testing apparatus" />
        <ProjectPreview
          route="Beerbook"
          title="Beerbook"
          Icon={BeerIcon}
          labels={['React']}
          description="A site to get information about all of your favorite beers"/> */}
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
          Icon={JournalIcon}
          labels={['React Native', 'Node.js', 'MongoDB', 'Expo']}
          description="A simple journal application for iOS and Android" />
        <ProjectPreview
          route="taylorgriffinio"
          title="taylorgriffin.io"
          Icon={PortraitIcon}
          labels={['React', 'AWS']}
          description="This site!"/> */}
      </Grid>
  );
}

const style = isSmallSize => {
  return {
    container: {
      paddingLeft: '5%',
      paddingRight: '5%',
      justifyContent: isSmallSize ? 'center' : 'flex-start',
      backgroundColor: BACKGROUND,
      width: '99vw',
      alignSelf: 'center',
      boxSizing: "border-box",
      marginTop: 40,
      marginBottom: 40,
    },
  }
}

export default Projects;