import React from 'react';
import styled from 'styled-components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let Heading = styled.div`
  text-align: center;
`;

let Headline = styled.h1`
  color: white;
`;

let SubHeadline = styled.h3`
  color: white;
`;

let Link = styled.a`
  color: white;
  float: left;
  margin-left: 10%;
  text-decoration: none;
`;

const Template = ({ title, content }) => {
  return(
    <Heading>
      <Headline>{title}</Headline>
      <SubHeadline>{content}</SubHeadline>
      <Link href="/projects"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back to Projects</Link>
    </Heading>
  )
}

export default Template;