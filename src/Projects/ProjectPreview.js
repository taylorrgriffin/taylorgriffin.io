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
    border: 2px solid white;
    &:hover {
      cursor: pointer;
      border: 2px solid tomato;
    }
    /* TODO: fix this hover effect on the heading */
    /* ${Heading}:hover & {
      color: tomato;
    } */
`;

const ProjectPreview = ({ title, img, Icon, description, route, stretch, backgroundColor, width }) => {
  let history = useHistory();
  let styles = style(backgroundColor, width ? width : '210px');
  return (
    <Grid item xs={10} sm={6} lg={4} md={4}>
      <Div onClick={()=>{history.push(`/projects/${route}`)}}>
        <div style={styles.imgContainer}>
          {Icon && <Icon/>}
          {img && <img src={img} style={stretch ? styles.stretchedImg : styles.img} alt={`${route} logo`}/>}
        </div>
        <div style={styles.info}>
          <Heading>{title}</Heading>
          <div style={styles.description}>{description}</div>
        </div>
      </Div>
    </Grid>
  );
}

const style = (backgroundColor, width) =>
{
  return {
    imgContainer: {
      backgroundColor: backgroundColor,
      height: '200px',
      display: 'flex',
      justifyContent: 'center'
    },
    img: {
      width: width,
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