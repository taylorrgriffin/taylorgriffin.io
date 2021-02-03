import React from 'react';
// import '../../glow.css';
import { example1, example2, example3 } from './examples';
import { Button, ButtonGroup, MuiThemeProvider } from '@material-ui/core';

import errorTheme from '../../styles/errorTheme';

// TODO: implement glowing box
// <div id="text">
// </div>

const Controls = ({ generateAST, setImgCode, setInputCode, setErr, inputCode }) => {
  return (
    <div style={styles.container}>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group" style={{ marginTop: 10 }}>
        <Button onClick={() => {
          setInputCode(example1);
          generateAST(example1, setImgCode, setErr);
        }}>Example 1</Button>
        <Button onClick={() => {
          setInputCode(example2);
          generateAST(example2, setImgCode, setErr);
        }}>Example 2</Button>
        <Button onClick={() => {
          setInputCode(example3);
          generateAST(example3, setImgCode, setErr);
        }}>Example 3</Button>
      </ButtonGroup>
      <div style={styles.actionButtons}>
        <MuiThemeProvider theme={errorTheme}>
          <Button variant="outlined" color='primary' style={{ marginRight: 10 }} onClick={() => {
            setImgCode(null);
            setInputCode('# edit code here\n');
          }}>
            Clear Input
          </Button>
        </MuiThemeProvider>
        <Button variant="outlined" color="primary" style={{ marginLeft: 10 }} onClick={() => {
          if (inputCode.length < 1) {
            setErr("Please enter valid python code, or click one of the examples.");
            setInputCode("# edit code here\n")
          }
          else {
            generateAST(inputCode, setImgCode, setErr)
          }
        }}>
          Generate Visualization
        </Button>
      </div>
    </div>
  )
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    paddingTop: 20,
    // paddingLeft: '5vw',
    // paddingRight: '5vw',
    textAlign: 'left',
    backgroundColor: '#18191a',
    // backgroundColor: '#121212',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    minWidth: '100%',
    boxSizing: "border-box"
  },
  actionButtons: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    // minWidth: '20vw'
  },
}

export default Controls;