import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let Heading = styled.div`
  text-align: center;
`;

let Headline = styled.h1`
  color: white;
  font-size: 2em;
  font-weight: bolder;
`;

let SubHeadline = styled.h2`
  color: white;
`;

let Link = styled.a`
  color: white;
  float: left;
  margin-left: 10%;
  text-decoration: none;
  font-size: 1.5em;
  &:hover {
    color: tomato;
  }
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 350px;
`;

const RepoHeadline = styled.p`
  text-align: center;
`;

const GitHubLink = styled.a`
  color: white;
  font-size: 1.5em;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
`;

const Template = ({ title, content, logo, logoWidth, logoAlt, repo }) => {
  return(
    <Heading>
      <Headline>{title}</Headline>
      <SubHeadline>{content}</SubHeadline>
      <LogoContainer><Logo src={logo} alt={logoAlt} style={{ width: logoWidth ? logoWidth : undefined }}/></LogoContainer>
      <RepoHeadline>
        {
        repo &&
        <GitHubLink href={repo}>
            <FontAwesomeIcon icon={faGithub}/>
            &nbsp;&nbsp;&nbsp;{title}
        </GitHubLink>
        }
      </RepoHeadline>
      <Link href="/projects"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back to Projects</Link>
    </Heading>
  )
}

export default Template;