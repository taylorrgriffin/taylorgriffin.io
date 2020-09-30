import React from 'react';
import { Typography } from '@material-ui/core';

import Gallery from '../../Common/Gallery';
import ProjectHeading from '../ProjectHeading';

import tastybeacon_login from '../../assets/tastybeacon_login.png';
import tastybeacon_map from '../../assets/tastybeacon_map.png';
import tastybeacon_filters from '../../assets/tastybeacon_filters.png';
import tastybeacon_truck from '../../assets/tastybeacon_truck.png';
import tastybeacon_profile from '../../assets/tastybeacon_profile.png';


import logo from '../../assets/tastybeacon-cropped.png';

const screenshots = [
  {
    label: 'Tasty Beacon - Login',
    src: tastybeacon_login
  },
  {
    label: 'Tasty Beacon - Explore',
    src: tastybeacon_map
  },
  {
    label: 'Tasty Beacon - Filters',
    src: tastybeacon_filters
  },
  {
    label: 'Tasty Beacon - Truck',
    src: tastybeacon_truck
  },
  {
    label: 'Tasty Beacon - Truck Profile',
    src: tastybeacon_profile
  }
];

const Project = () => {
  return (
    <div style={styles.parentContainer}>
      <ProjectHeading
        heading="Tasty Beacon"
        subHeading={`Helping food truck vendors and patrons meet supply and demand through an easy to use find-and-order interface.
        React Native application available on iOS and Android.`}
        imgSrc={logo}
        labels={['React Native', 'Javascript', 'Node.js', 'GraphQL', 'MySQL', 'Bash', 'AWS']}
      />
      <div style={styles.container}>
        <Typography variant="h3" component="h2">
          Motivation
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>
              Food truck vendors lack a unified way to communicate with patrons
            </li>
            <li>
              Patrons have a hard time locating food trucks that move around
            </li>
            <li>
              Simplify the process of locating your food truck and streamline the ordering process
            </li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          MVP Goals
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>
              Vendors and Patrons can register for Tasty Beacon accounts via Google and Facebook authentication
            </li>
            <li>
              Vendors can create a discoverable truck profile with information including name, description, website, cuisine categories, etc.
            </li>
            <li>
              Patrons can discover avaliable nearby vendors on a map, can search by keyword, can filter by category, and can view the vendors’ profiles
            </li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          Duties
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>System Architecture Design</li>
            <li>Database Development</li>
            <li>Backend Webservice Development</li>
            <li>Frontend Mobile Development</li>
            <li>Build/Test/Release Processes</li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          Gallery
        </Typography>
        <Gallery imageSteps={screenshots} />
      </div>
    </div>
  );
}

let styles = {
  parentContainer: {
    backgroundColor: '#000000',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    paddingTop: 20,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    textAlign: 'left',
    backgroundColor: '#121212',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    minWidth: '100%',
    boxSizing: "border-box"
  },
  link: {
    color: '#03DAC6',
    textDecoration: 'none'
  },
}

export default Project;