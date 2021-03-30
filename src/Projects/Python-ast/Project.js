import React, { useState, useRef } from 'react';
import { Alert } from '@material-ui/lab';
import { useMediaQuery } from 'react-responsive';
import { highlight, languages } from 'prismjs/components/prism-core';
import { Typography, Link as MaterialLink, Chip } from '@material-ui/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-python';
import '../../styles/prism.css';

import { BACKGROUND, PAGE_BACKGROUND, BORDER } from '../../styles/colors';

import Controls from './controls';
import { example1 } from './examples';

import { apiKey } from '../../secrets';
import config from '../../config';

// configure environment for parsing config options
const ENV = process.env.REACT_APP_ENV ? process.env.REACT_APP_ENV : 'dev';

// configure api url
const apiBaseUrl = config[ENV].apiBaseUrl;
const apiUrlExt = `apiKey=${apiKey}`;

// TODO: consider moving this within main component
// enforce proper formatting of python source code
const resolvePyStr = (str) => {
  // if string is not empty, ensure it ends in a newline
  if (str.length > 0 && str.slice(-1) !== '\n') {
    str = str.concat('\n');
  }
  return str
}

// TODO: probably move this within main componenet so you don't need to pass references
const generateAST = (input, setImgCode, setErr) => {
  let sourceCode = resolvePyStr(input);
  // setLoading(true);
  setErr(null);
  fetch(
    `${apiBaseUrl}/api/python-ast?${apiUrlExt}`, {
    method: 'POST',
    body: JSON.stringify({
      python: sourceCode,
      bgColor: PAGE_BACKGROUND,
      edgeColor: '#FFFFFF',
      nodeColor: '#FFFFFF',
      orientation: 'horizontal',
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    if (!res.ok) {
      // setLoading(false);
      setErr("Incorrect/Unsupported syntax, please try again or click on one of the examples");
      throw Error("Error fetching data.");
    }
    return res.json()
  }).then((data) => {
    setImgCode(data.code);
  }).catch((err) => {
    console.error(err);
    setErr("Incorrect/Unsupported syntax, please try again or click on one of the examples");
    // setLoading(false);
  });
  // setLoading(false);
}

const Project = () => {
  const [err, setErr] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [imgCode, setImgCode] = useState("");
  const [inputCode, setInputCode] = useState(example1);

  const inputRef = useRef();

  const isDesktop = useMediaQuery({ minWidth: 984 });
  const isNarrow = useMediaQuery({ query: '(max-width: 600px)' });
  const styles = style(isDesktop);

  const repo = "https://github.com/taylorrgriffin/python-ast";
  const labels = ['C++', 'Bison', 'Flex', 'Bash', 'JavaScript'];


  // useEffect(() => {
  //   if (inputRef) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  return (
    <div style={styles.parentContainer}>
      <div style={styles.container}>
        {/* Title and links */}
        <Typography variant="h3" style={{ marginBottom: 20, fontSize: isNarrow ? 36 : undefined, textAlign: 'center' }}>Python Abstract Syntax Tree Visualizer</Typography>
        {
          labels && <div style={styles.labels}>
            {labels.map((label) => {
              return <Chip color="secondary" label={label} variant="outlined" style={styles.label} />
            })}
          </div>
        }
        <MaterialLink style={{ textAlign: 'center', margin: 10 }} href={repo}><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;python-ast</MaterialLink>
        {/* TODO: consider moving this link so it doesn't blend in as much with the wikipedia link.. or just remove the link */}
        <MaterialLink href="/projects" style={{ alignSelf: 'start', marginBottom: 10 }}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back to Projects</MaterialLink>
        {/* Description */}
        <Typography variant="lead">
        Visualize  from simplified Python syntax.
        Write some Python code in the editor and click "Generate Visualization", 
        or select one of the examples to try it out!
        </Typography>
        {/* TODO: add floating nav bar on left */}
        <div style={styles.wrapContainer}>
        <div>
          <div style={styles.editorWrapper}>
            {/* TODO: change the prism css file so the editor border color is different */}
            <Editor
              value={inputCode}
              onValueChange={code => setInputCode(code)}
              highlight={code => highlight(code, languages.python)}
              autoFocus={true}
              ref={inputRef}
              padding={10}
              style={styles.editor} />
          </div>
          {/* TODO: change error theme and button colors to match dracula theme */}
          <Controls
            generateAST={generateAST}
            setImgCode={setImgCode}
            setInputCode={setInputCode}
            setErr={setErr}
            inputCode={inputCode} />
        </div>
        { !err && <div style={styles.imgParent}>
          <img
            alt="Python code AST visualization"
            src={`${apiBaseUrl}/python-ast/${imgCode}`}
            onError={(e)=>{e.target.onerror = null; e.target.src=""}}
            style={styles.AST} />
        </div>}
        </div>
        
        
        { err && <div><Alert severity="error" variant="outlined" color="error" style={{ color: '#CF6679' }}>{err}</Alert></div> }
        {/* TODO: incorperate spinner  */}
        {/* { loading && <div style={styles.spinnerParent}><CircularProgress color="secondary" /></div>} */}
        {/* TODO: currently this url exposes the api key. Change the endpoint so it doesn't require the api key */}
        { !err && <MaterialLink target="_blank" href={`${apiBaseUrl}/python-ast/${imgCode}`}>Download AST</MaterialLink>}
      </div>
      <div style={styles.container}>
        <Typography variant="h3" style={{ fontSize: isNarrow ? 30 : undefined, textAlign: 'center' }}>Supported Syntax</Typography>
        <div style={styles.listItems}>
          <div>
            <em><Typography variant="h5" fontS>Data Types</Typography></em>
            <ul>
              <li>Integer</li>
              <li>Float</li>
              <li>Boolean</li>
            </ul>
          </div>
          <div>
            <em><Typography variant="h5">Arithmetic</Typography></em>
            <ul>
              <li>Addition</li>
              <li>Subtraction</li>
              <li>Multiplication</li>
              <li>Division</li>
            </ul>
          </div>
          <div>
            <em><Typography variant="h5">Comparisons</Typography></em>
            <ul>
              <li>==</li>
              <li>!=</li>
              <li>&lt;</li>
              <li>&gt;</li>
              <li>&lt;=</li>
              <li>&gt;=</li>
            </ul>
          </div>
          <div>
            <em><Typography variant="h5">Branching Statements</Typography></em>
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
        <Typography variant="h3" style={{ fontSize: isNarrow ? 30 : undefined, textAlign: 'center' }}>Background</Typography>
        <Typography>
          <br/><br/>
          This project accepts code written with simple python syntax and creates a graphviz specification representing the source program.
          The produced graphviz spec can be used to generate an visualization of the abstract syntax tree.
          <br/><br/>
          The program first utilizes a flex scanner to ensure the input consists of entirely valid symbols.
          If the symbols are all valid, a bison parser ensures that the input follows all syntatical rules.
          Lastly, if the first two conditions are met, the graphviz specification is assembled and printed to stdout.
          <br/><br/>
          Please note, this program is not compatible will all python syntax, merely a subset that we will refer to as "Simplified Python Syntax".
          Note that this limitation is by design.
        </Typography>
      </div>
      <div style={styles.container}>
        <Typography variant="h4" style={{ fontSize: isNarrow ? 26 : undefined, textAlign: 'center' }}>Frequently Asked Questions (FAQ)</Typography>
        <br/>
        <Typography variant="h5">What is an Abstract Syntax Tree?</Typography>
        <Typography>
          An <MaterialLink href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">abstract syntax tree</MaterialLink> (AST), 
           is a data structure that can be used to represent code. The reason it is abstract, is because instead of dislaying every character that appears in the code,
           it merely represents syntax of each statement. ASTs are useful for a multitude of applications including compilers, algorithms, and program analysis.
        </Typography>
        <Typography variant="h5">Why did you make this...?</Typography>
        <Typography>
          This project started as a homework assignment for my compilers course in college. I found the concepts and implementation very interesting, 
          so I decided to transform it into an interactive web experience. In the future I am planning on adding more projects to this site, some of which 
          will likely be related to compilers as well.
        </Typography>
        <Typography variant="h5">Why is only limited syntax supported?</Typography>
        <Typography>
          This program is intended to be used in a greater python compiler, and a different component in the compiler would be
          responsible for reducing more advanced python syntax into simplified syntax. In general, much of the syntax of modern programming languages 
          can be reduced into more primitive syntax, and exist merely for the convenience and efficiency of the programmer. 
        </Typography>
        <Typography variant="h5">How can I learn more about compilers?</Typography>
        <Typography>
          There's lots of great resources out there to learn about compiler design and theory. If you're just getting started, I'd recommend 
          checking out <MaterialLink href="https://www.geeksforgeeks.org/introduction-of-compiler-design/">Introduction of Compiler Design</MaterialLink>.
        </Typography>    
      </div>
    </div>
  );
}

// TODO: move all styles out into seperate styles folder
const style = isDesktop => ({
  parentContainer: {
    backgroundColor: BACKGROUND,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 'calc(8px + 2vmin)',
    paddingTop: 20,
    textAlign: 'left',
    backgroundColor: PAGE_BACKGROUND,
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    paddingLeft: '3vw',
    paddingRight: '3vw',
    minWidth: '100%',
    boxSizing: "border-box",
    border: `1px solid ${BORDER}`
  },
  editorWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  editor: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    width: isDesktop ? '40vw' : '60vw',
    justifyContent: 'center',
    minHeight: 100,
  },
  actionButtons: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
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
    flexDirection: isDesktop ? 'row' : 'column',
  },
  label: {
    margin: 5
  },
  labels: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  listItems: {
    width: '70vw',
    flexWrap: 'wrap',
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
})

export default Project;