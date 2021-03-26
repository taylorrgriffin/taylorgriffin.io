import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../../styles/colors';

const Project = () => {
  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isNarrow);
  return (
    <div style={styles.parentContainer}>
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