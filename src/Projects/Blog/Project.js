import React, { useState, useEffect } from 'react';
import PostPreview from './PostPreview';
import { useMediaQuery } from 'react-responsive';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../../styles/colors';

const paragraphRegex = /<p>.*<\/p>/g;


// credit to Johs: https://stackoverflow.com/a/24350326
function removeTags(string){
  return string.replace(/<[^>]*>/g, ' ')
               .replace(/\s{2,}/g, ' ')
               .trim();
}

const Project = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@taylorrgriffin')
     .then((res) => res.json())
     .then((data) => {
         setPosts(data.items);
      });
  }

  // TODO: use oop

  const previewFromContent = content => {
    let PREVIEW_LENGTH = 60;

    let paragraphs = content.match(paragraphRegex);
    let paragraphsWithoutMarkup = [];
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphsWithoutMarkup.push(removeTags(paragraphs[i]));
    }

    let preview = paragraphsWithoutMarkup.join(" ")

    let shortenedPreview = preview.substr(0, PREVIEW_LENGTH) + '...';

    return shortenedPreview;
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isNarrow);
  return (
    <div style={styles.parentContainer}>
      {
        posts && posts.map((post) => {
          return <PostPreview
            heading={post.title}
            img={post.thumbnail}
            onClick={() => {
              window.open(post.link, '_blank');
            }}
            caption={previewFromContent(post.content)}
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