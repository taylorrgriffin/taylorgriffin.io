import React from 'react';
import styled from 'styled-components';

import taylorgriffin from '../../assets/taylorgriffin.svg';

import Template from '../../Common/ProjectTemplate';

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

const Taylorgriffinio = () => {
  return (
    <div style={styles.container}>
      <Template
        title="taylorgriffin.io"
        logo={taylorgriffin}
        logoAlt="React logo"
        content="My personal website, built with React and hosted on AWS"/>
      <Paragraph>
        <Spacer/>
        This website started as a way for me to test my React skills, and serve as a portfolio and hub of information to show off to potential employers.
        <br/><br/>
        Eventually, I'd like to use it as a place to write about my journey as a software engineer, and create tutorials and content for beginner to intermediate programmers.
        <br/><br/>
        I plan on creating a series of tutorials which detail all the steps I took to create this site including writing a simple app with React, buying a domain, setting up an EC2 instance, and tieing it all together.
        <br/><br/>
        Check back later for more fun programming content!
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

export default Taylorgriffinio;