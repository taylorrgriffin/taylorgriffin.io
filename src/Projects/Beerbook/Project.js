import React from 'react';
import styled from 'styled-components';

import Template from '../../Common/ProjectTemplate';
import PhotoGallery from '../../Common/PhotoGallery';

import MugPNG from '../../assets/beer_mug.png';
import HomePNG from '../../assets/Beerbook_Home.png';
import BeersPNG from '../../assets/Beerbook_Beers.png';
import SearchPNG from '../../assets/Beerbook_Search.png';

import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Paragraph = styled.p`
  color: white;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.4em;
`;

const Link = styled.a`
  color: #61DAFB;
  text-decoration: none;
`;

const Spacer = styled.hr`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const BeerIcon = () => (
  <FontAwesomeIcon
    icon={faBeer}
    style={{
      alignSelf: 'center',
      fontSize: '100px',
      color: 'tomato'
    }} />
);

const Beerbook = () => {
  return (
    <div style={styles.container}>
      <Template
      Icon={BeerIcon}
        // logo={MugPNG}
        // logoWidth={"150px"}
        title="Beerbook"
        repo="https://github.com/taylorrgriffin/Beerbook"
        repoName="Beerbook"
        content="A familar looking React application for finding information about your favorite beers"/>
      <Paragraph>
        <Spacer/>
        <h2>Background</h2>
        Beerbook is a site for finding information about all of your favorite beers and hops. It is written using React, and relies on the <Link href="https://www.brewerydb.com/">BreweryDB API</Link> for data.
        This project is a collaberation between myself
        and <Link href="https://github.com/ahujae">Ethan Ahuja</Link>, and was our final project for the Advanced Web Development course at Oregon State University.
        <br/><br/>
        Our assignment was to create a dynamic React application using efficient and scalable patterns, that consumes a public API, and allows the user to make at least one query.
        We styled Beerbook after a popular social network, and aimed to give our users a simple interface to discover and learn about beer from across the world.
        <h2>Learning outcomes</h2>
        A few of the key skills I was able to practice while working on Beerbook were:
        <ul>
          <li>Styled components with <Link href="https://emotion.sh/docs/introduction">Emotion</Link></li>
          <li>Using React Hooks to make API requests</li>
          <li>Dynamic routing with <Link href="https://reactrouter.com/">React Router</Link> (specifically react-router-dom)</li>
          <li>Pointing API requests through a cors-anywhere server to prevent cross-origin request rejection</li>
          <li>Designing interactive and attractive user experiences with React</li>
        </ul>
        <h2>Gallery</h2>
        <PhotoGallery images={[
          HomePNG,
          BeersPNG,
          SearchPNG,
        ]}/>
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

export default Beerbook;