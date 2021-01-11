import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { HashLink as Link } from 'react-router-hash-link';
import { highlight, languages } from 'prismjs/components/prism-core';
import { Typography, Button, ButtonGroup, MuiThemeProvider, createMuiTheme, Link as MaterialLink, ListItem, List } from '@material-ui/core';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-python';
import '../../prism-alt.css';
import AST from '../../assets/python.png';
import ProjectHeading from '../ProjectHeading';
import { example1, example2, example3 } from './examples';

import { apiKey } from '../../secrets';
import config from '../../config';

// configure environment for parsing config options
const ENV = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'dev';

// configure api url
const apiBaseUrl = config[ENV].apiBaseUrl;
const apiUrl = `${apiBaseUrl}/python-ast`
const apiUrlExt = `apiKey=${apiKey}`;

// TODO: move this to styling
const errorTheme = createMuiTheme({ palette: { primary: { main: '#CF6679' } } });

// TODO: consider moving this within main component
// enforce proper formatting of python source code
const resolvePyStr = (str) => {
  // if string is not empty, ensure it ends in a newline
  if (str.length > 0 && str.slice(-1) != '\n') {
    str = str.concat('\n');
  }
  return str
}

// TODO: probably move this within main componenet so you don't need to pass references
const generateAST = (input, setImgCode, setLoading, setErr) => {
  let sourceCode = resolvePyStr(input);
  console.info(sourceCode)
  setLoading(true);
  setErr(null);
  fetch(
    `${apiUrl}?${apiUrlExt}`, {
    method: 'POST',
    body: JSON.stringify({ python: sourceCode }),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    if (!res.ok) {
      setLoading(false);
      setErr("Incorrect/Unsupported syntax, please try again or click on one of the examples");
      throw Error("Error fetching data.");
    }
    return res.json()
  }).then((data) => {
    setImgCode(data.code);
  }).catch((err) => {
    console.error(err);
    setErr("Incorrect/Unsupported syntax, please try again or click on one of the examples");
    setLoading(false);
  });
  setLoading(false);
}

const Project = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgCode, setImgCode] = useState("");
  const [inputCode, setInputCode] = useState(example1);

  return (
    <div style={styles.parentContainer}>
      {/* <ProjectHeading 
        heading="Python Abstract Syntax Tree Visualizer"
        subHeading={`Visualize abstract syntax tree from simple Python Syntax.
        Utilizes a Flex scanner and a Bison parser to generate a Graphviz specification. Uses GraphViz to display the generated spec.
        Visualizations are served as PNGs from api.taylorgriffin.io`}
        imgSrc={AST}
        labels={['C++', 'Bison', 'Flex', 'Bash']}
        repo="https://github.com/taylorrgriffin/python-ast"
        repoName="python-ast"
      /> */}
      <div style={styles.container}>
        {/* TODO: change styling to try to put these next to each other */}
        <Typography variant="h3" style={{ marginBottom: 20 }}>Python Abstract Syntax Tree Visualizer</Typography>
        <Typography variant="lead">
        Visualize <MaterialLink href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">abstract syntax tree</MaterialLink> from simplified Python syntax.
        Flex scanner and Bison parser generate tokens to generate a GraphViz specification. Uses GraphViz to display the generated spec.
        Visualizations are served as PNGs from <MaterialLink href="https://api.taylorgriffin.io">api.taylorgriffin.io</MaterialLink>
        </Typography>
        {/* TODO: add navigation back to projects */}
        {/* TODO: add floating navigation bar on left */}
        {/* TODO: change orientation to column view on smaller width */}
        <div style={styles.wrapContainer}>
        <Editor
          value={inputCode}
          onValueChange={code => setInputCode(code)}
          highlight={code => highlight(code, languages.python)}
          padding={10}
          style={styles.editor}
        />
        { !err && <div style={styles.imgParent}><img src={`${apiUrl}/${imgCode}?${apiUrlExt}`} style={styles.AST}/></div>}
        </div>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group" style={{ marginTop: 10 }}>
          <Button onClick={() => {
            setInputCode(example1);
            generateAST(example1, setImgCode, setLoading, setErr);
          }}>Example 1</Button>
          <Button onClick={() => {
            setInputCode(example2);
            generateAST(example2, setImgCode, setLoading, setErr);
          }}>Example 2</Button>
          <Button onClick={() => {
            setInputCode(example3);
            generateAST(example3, setImgCode, setLoading, setErr);
          }}>Example 3</Button>
        </ButtonGroup>
        <div style={styles.actionButtons}>
          <MuiThemeProvider theme={errorTheme}>
            <Button variant="outlined" color='primary' style={{ marginRight: 10 }} onClick={() => {
              setImgCode(null);
              setInputCode('# edit code here\n');
              setLoading(false);
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
              generateAST(inputCode, setImgCode, setLoading, setErr)
            }
          }}>
            Generate Visualization
          </Button>
        </div>
        { err && <div><Alert severity="error" variant="outlined" color="error" style={{ color: '#CF6679' }}>{err}</Alert></div> }
        {/* TODO: incorperate spinner  */}
        {/* { loading || imgCode && <div style={styles.spinnerParent}><Spinner/></div>} */}
        {/* TODO: figure out how to catch 404 and display error */}
        { !err && <MaterialLink target="_blank" href={`${apiUrl}/${imgCode}?${apiUrlExt}`}>Download AST</MaterialLink>}
      </div>
      {/* TODO: add styling to these */}
      <div style={styles.container}>
        <Typography variant="h3">Supported Syntax</Typography>
        <div style={{ flex: '1', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-around' }}>
          <div style={{ display: 'inline-block' }}>
            <Typography variant="h5">Data Types</Typography>
            <ul>
              <li>Integer</li>
              <li>Float</li>
              <li>Boolean</li>
            </ul>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Typography variant="h5">Arithmetic</Typography>
            <ul>
              <li>Addition</li>
              <li>Subtraction</li>
              <li>Multiplication</li>
              <li>Division</li>
            </ul>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Typography variant="h5">Comparisons</Typography>
            <ul>
              <li>==</li>
              <li>!=</li>
              <li>&lt;</li>
              <li>&gt;</li>
              <li>&lt;=</li>
              <li>&gt;=</li>
            </ul>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Typography variant="h5">Branching Statements</Typography>
            <ul>
              <li>If</li>
              <li>If ... Else</li>
              <li>While</li>
              <li>Break</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        {/* TODO: finish description */}
        <Typography variant="h3">Background</Typography>
        <Typography>
          <br/><br/>
          Add description here
          {/* This project accepts code written with simple python syntax and creates a graphviz specification representing the source program.
          The produced graphviz spec can be used to generate an visualization of the abstract syntax tree.
          <br/><br/>
          The program first utilizes a flex scanner to ensure the input consists of entirely valid symbols.
          If the symbols are all valid, a bison parser ensures that the input follows all syntatical rules.
          Lastly, if the first two conditions are met, the graphviz specification is assembled and printed to stdout.
          <br/><br/>
          Please note, this program is not compatible will all python syntax, merely a subset that we will refer to as "Simple Python Syntax".
          Note that this limitation is by design.
          This program is intended to be used in a greater python compiler, and a different component in the compiler would be
          responsible for reducing more advanced python syntax into simple syntax. For more, see the
          section <Link to="#syntax" style={{ color: '#03DACE', textDecoration: 'none' }}>below</Link> on Syntax. */}
        </Typography>
      </div>
      {/* TODO: finish FAQs */}
      <div style={styles.container}>
        <Typography variant="h4">Frequently Asked Questions (FAQ)</Typography>
        <Typography variant="h5">Why did you make this...?</Typography>
        <Typography>Add answer here</Typography>
        <Typography variant="h5">Why is only limited syntax supported?</Typography>
        <Typography>Add answer here</Typography>
        <Typography variant="h5">How can I learn more about compilers?</Typography>
        <Typography>Add answer here</Typography>    
      </div>
    </div>
  );
}

// TODO: move all styles out into seperate styles folder
let styles = {
  parentContainer: {
    // backgroundColor: '#000000',
    // backgroundColor: '#121212',
    backgroundColor: '#18191a',
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
  link: {
    color: '#03DAC6',
    textDecoration: 'none'
  },
  editor: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    width: '40vw',
    justifyContent: 'center',
    minHeight: 100,
  },
  actionButtons: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    // minWidth: '20vw'
  },
  imgParent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AST: {
    maxWidth: '80%',
  },
  wrapContainer: {
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
}

export default Project;