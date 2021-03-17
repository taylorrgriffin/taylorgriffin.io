import React, { useState, useEffect } from 'react';
import PostPreview from './PostPreview';
import { useMediaQuery } from 'react-responsive';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../../styles/colors';

const Project = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@taylorrgriffin')
     .then((res) => res.json())
     .then((data) => {
         setPosts(data.items);
         console.info(data.items);
      });
  }

  useEffect(() => {
    fetchPosts();
  });

  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isNarrow);
  return (
    <div style={styles.parentContainer}>
      {
        posts.map((post) => {
          return <PostPreview
            heading={post.title}
            img={post.thumbnail}
          />
        })
      }
    </div>
  );
}

const style = isNarrow => {
  return {
    parentContainer: {
      backgroundColor: PAGE_BACKGROUND,
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
      backgroundColor: BACKGROUND,
      borderRadius: 25,
      marginTop: 10,
      marginBottom: 20,
      paddingBottom: 20,
      boxSizing: "border-box",
      border: `1px solid ${BORDER}`
    },
  }
}

export default Project;