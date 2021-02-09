import React from 'react';
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button
} from '@material-ui/core';
import { PAGE_BACKGROUND, BORDER } from '../styles/colors';

const ProjectPreview = ({ heading, caption, img, route, repo }) => {
  let history = useHistory();

  return(
    <Grid item xs={10} sm={6} lg={4} md={4}>
      <Card style={styles.root}>
        <CardActionArea onClick={() => { history.push(`/projects/${route}`) }}>
          <CardMedia style={styles.imgContainer}>
            <img src={img} style={styles.img} alt="Project logo" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {heading}
            </Typography>
            <Typography variant="body1" component="p">
              {caption}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>{ history.push(`/projects/${route}`) }}>
            Learn More
          </Button>
          {repo && <Button size="small" color="primary" onClick={()=>{
            window.location.href = repo;
          }}>View Code</Button>}
        </CardActions>
      </Card>
    </Grid>
  );
}

const styles = {
  root: {
    maxWidth: 400,
    backgroundColor: PAGE_BACKGROUND,
    border: `1px solid ${BORDER}`
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    width: '250px',
    alignSelf: 'center',
    alignItems: 'center'
  },
}

export default ProjectPreview;