import React from 'react';
import styled from 'styled-components';

import Template from '../../Common/ProjectTemplate';

const Paragraph = styled.p`
  color: white;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
`;

const Spacer = styled.hr`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Beerbook = () => {
  return (
    <div style={styles.container}>
      <Template
        title="Beerbook"
        content="A familar looking React application for finding information about your favorite beers"/>
      <Paragraph>
        <Spacer/>
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