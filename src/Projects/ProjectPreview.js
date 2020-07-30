import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Heading = styled.h3`
  margin: 8px;
`;

const Div = styled.div`
    height: 320px;
    color: white;
    background-color: black;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    ${Heading}:hover & {
      color: tomato;
    }
`;

const ProjectPreview = ({ title, img, description, route, stretch, backgroundColor }) => {
  let history = useHistory();
  let styles = style(backgroundColor);
  return (
    <Grid item xs={10} sm={6} lg={4} md={4}>
      <Div onClick={()=>{history.push(`/projects/${route}`)}}>
        <div style={styles.imgContainer}>
          <img src={img} style={stretch ? styles.stretchedImg : styles.img} alt={`${route} logo`}/>
        </div>
        <div style={styles.info}>
          <Heading>{title}</Heading>
          <div style={styles.description}>{description}</div>
        </div>
      </Div>
    </Grid>
  );
}

const style = (backgroundColor) =>
{
  return {
    container: {
      height: "320px",
      color: "white",
      backgroundColor: 'black',
      alignItems: 'center',
    },
    imgContainer: {
      backgroundColor: backgroundColor,
      height: '200px',
      display: 'flex',
      justifyContent: 'center'
    },
    img: {
      width: '210px',
      alignSelf: 'center',
      alignItems: 'center'
    },
    stretchedImg: {
      width: '100%',
      height: '100%',
      objectFit: ''
    },
    info: {
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flex: 1,
    },
    heading: {
      margin: '8px'
    },
    description: {
      fontSize: '14px',
      margin: '2px'
    }
  }
}

export default ProjectPreview;