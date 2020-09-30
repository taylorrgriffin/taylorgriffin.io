import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core'

import Gallery from '../../Common/Gallery';
import ProjectHeading from '../ProjectHeading';
import journal_home from '../../assets/journal_home.png';
import journal_add from '../../assets/journal_add.png';
import journal_edit from '../../assets/journal_edit.png';

const Link = styled.a`
  color: #03DACE;
  text-decoration: none;
`;

const imageSteps = [
  {
    label: 'Journal - Home',
    src: journal_home,
  },
  {
    label: 'Journal - Add entry',
    src: journal_add,
  },
  {
    label: 'Journal - Edit entry',
    src: journal_edit,
  },
];

const Project = () => {
  return (
    <div style={styles.parentContainer}>
      <ProjectHeading 
        heading="Journal App"
        subHeading={`Simple journal application created with React Native and Expo, available for iOS and Android.
          Supports creating, editing, and deleting notes. Consumes Node.js backend, powered by MongoDB.`}
        // imgSrc={AST}
        labels={['React Native', 'Expo', 'Node.js', 'Docker', 'MongoDB']}
        repo="https://github.com/taylorrgriffin/JournalApp"
        repoName="JournalApp"
      />
      <div style={styles.container}>
        <Typography variant="h3">
          Background
        </Typography>
        <Typography variant="body">
          <br/><br/>
          Journal is a simple journaling application I created for my special projects course at OSU under the guidence and mentorship of <Link href="https://github.com/robwhess">Rob Hess</Link>.
          <br/><br/>
           The purpose of the project was to practice creating an application that utilizes React Native, Node.js, and MongoDb and demonstrates CRUD functionality (create, read, update, delete).
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          Learning outcomes
        </Typography>
        <Typography variant="body">
          <br/><br/>
          A few of the key skills I was able to practice while developing Journal were:
          <ul>
            <li>Using the Expo build pipeline to deploy a React Native application to both iOS and Android devices</li>
            <li>Creating RESTful endpoints on a Node.js express server for read, write, update, and delete operations</li>
            <li>Developing methods to interface with a MongoDb database for CRUD operations</li>
            <li>Making RESTful API calls from React Native to a Node.js expres server</li>
            <li>Designing and developing fluid user interfaces with dynamic data in React Native</li>
          </ul>
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h3">
          Gallery
        </Typography>
        <Gallery imageSteps={imageSteps} />
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
}

export default Project;