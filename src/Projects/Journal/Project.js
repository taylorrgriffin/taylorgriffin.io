import React from 'react';
import styled from 'styled-components';

import Template from '../../Common/ProjectTemplate';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Paragraph = styled.p`
  color: white;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.4em;
`;

const Spacer = styled.hr`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #61DAFB;
  text-decoration: none;
`;

const JournalIcon = () => (
  <FontAwesomeIcon
    icon={faBook}
    style={{
      alignSelf: 'center',
      fontSize: '100px',
      color: 'tomato'
    }} />
);

const Project = () => {
  return (
    <div style={styles.container}>
      <Template
        title="Journal"
        repo="https://github.com/taylorrgriffin/JournalApp"
        repoName="Journal App"
        repoAlt="https://github.com/taylorrgriffin/JournalAPI"
        repoAltName="Journal API"
        Icon={JournalIcon}
        content="Journal application available for Android and iOS"/>
      <Paragraph>
        <Spacer/>
        <h2>Background</h2>
        Journal is a simple journaling application I created for my special projects course at OSU under the guidence and mentorship of <Link href="https://github.com/robwhess">Rob Hess</Link>.
        <br/><br/>
        The purpose of the project was to practice creating an application that utilizes React Native, Node.js, and MongoDb and demonstrates CRUD functionality (create, read, update, delete).
        <h2>Learning outcomes</h2>
        A few of the key skills I was able to practice while developing Journal were:
        <ul>
          <li>Using the Expo build pipeline to deploy a React Native application to both iOS and Android devices</li>
          <li>Creating RESTful endpoints on a Node.js express server for read, write, update, and delete operations</li>
          <li>Developing methods to interface with a MongoDb database for CRUD operations</li>
          <li>Making RESTful API calls from React Native to a Node.js expres server</li>
          <li>Designing and developing fluid user interfaces with dynamic data in React Native</li>
        </ul>
        <h2>Gallery</h2>
        Screenshots coming soon!
      </Paragraph>
    </div>
  );
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#282c34'
  },
  link: {
    color: '#61DAFB',
    textDecoration: 'none'
  },
}

export default Project;