import React from 'react';
import { Typography } from '@material-ui/core';

import Gallery from '../../Common/Gallery';
import ProjectHeading from '../ProjectHeading';

import tastybeacon_login from '../../assets/tastybeacon_login.png';
import tastybeacon_map from '../../assets/tastybeacon_map.png';
import tastybeacon_filters from '../../assets/tastybeacon_filters.png';
import tastybeacon_truck from '../../assets/tastybeacon_truck.png';
import tastybeacon_profile from '../../assets/tastybeacon_profile.png';

import { FONT } from '../../styles/colors';
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
      <div style={styles.container}>
        <Typography variant="h3">
          What went well?
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>
              Application is easy to scale and allows for rapid feature development
              <ul>
                <li>State management infrastructure is clean and easy to use</li>
                <li>GraphQL data can easily be mocked for unit testing</li>
                <li>Navigation was set up well</li>
              </ul>
            </li>
            <li>
              API and Database deployment is easy and fast
              <ul>
                <li>Backend can be torn down and spun up in under 5 seconds</li>
                <li>CI/CD integration is straightforward with Docker</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          What could have gone better?
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>
              Trying to force one paradigm to fit the whole app
              <ul>
                <li>Tried choosing Hooks vs. seperation of presentational/business logic</li>
                <li>In reality, both paradigms can be used in conjunction depending on which one fits each page best</li>
              </ul>
            </li>
            <li>
              Using Feature-Driven Development instead of Test-Driven Development
              <ul>
                <li>Componenets often had to be reworked to be testable</li>
                <li>Lead to large time waste</li>
              </ul>
            </li>
            <li>
              Using an ORM instead of writing raw SQL
              <ul>
                <li>Convineince was minimal</li>
                <li>More complex queries became a huge hassel</li>
                <li>Spherical Law of Consines took much longer to decipher using Knex</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          Final Takeaways
        </Typography>
        <Typography variant="body">
          <br/><br/>
          <ul>
            <li>Be mindful of big decisions, but don’t let fear of mistakes paralyze you</li>
            <li>Early on invest time into testing infrastructure</li>
            <li>Utilize test-driven development whenever possible</li>
          </ul>
        </Typography>
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
    color: FONT,
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
}

export default Project;