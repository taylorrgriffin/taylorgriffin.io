import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python';

import '../../prism.css';

import { example1, example2, example3 } from './examples';

import Template from '../../Common/ProjectTemplate';

const Paragraph = styled.p`
  color: white;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.4em;
`;

const Spacer = styled.hr`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: white;
  font-size: 18px;
  padding: 5px;
  border: 3px solid black;
  &:hover {
    cursor: pointer;
    /* background-color: tomato;
    color: white; */
  }
`;

// const JournalIcon = () => (
//   <FontAwesomeIcon
//     icon={faBook}
//     style={{
//       alignSelf: 'center',
//       fontSize: '100px',
//       color: 'tomato'
//     }} />
// );

const generateAST = (input, setImgCode, setLoading, setErr) => {
  setLoading(true);
  setErr(null);
  fetch(
    "http://localhost:8080/python-ast", {
    method: 'POST',
    body: JSON.stringify({
      // ensure input string ends with newline
      python: input.slice(-1) == '\n' ? input : input.concat('\n')
    }),
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
  const [imgCode, setImgCode] = useState(null);
  const [inputCode, setInputCode] = useState('');

  return (
    <div style={styles.container}>
      <Template
        title="Python AST Visualization"
        repo="https://github.com/taylorrgriffin/python-ast"
        repoName="python-ast" />
      <Paragraph>
        <Spacer/>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <div style={styles.examples}>
            <Button onClick={() => {
              setInputCode(example1);
              generateAST(example1, setImgCode, setLoading, setErr);
            }}>
              Example 1
            </Button>
            <Button onClick={() => {
              setInputCode(example2);
              generateAST(example2, setImgCode, setLoading, setErr);
            }}>
              Example 2
            </Button>
            <Button onClick={() => {
              setInputCode(example3);
              generateAST(example3, setImgCode, setLoading, setErr);
            }}>
              Example 3
            </Button>
          </div>
          <Editor
            value={inputCode}
            onValueChange={code => setInputCode(code)}
            highlight={code => highlight(code, languages.python)}
            padding={10}
            style={styles.editor}
          />
        </div>
        <div style={styles.submitButtons}>
          <Button onClick={() => {
            if (inputCode.length < 1) {
              setErr("Please enter valid python code, or click one of the examples.");
            }
            else {
              generateAST(inputCode, setImgCode, setLoading, setErr)
            }
          }}>
            Generate AST
          </Button>
        </div>
        { err || <div><p style={styles.errText}>{err}</p></div> }
        { loading || imgCode && <Spacer/> }
        {/* { loading || imgCode && <div style={styles.spinnerParent}><Spinner/></div>} */}
        { imgCode && <div style={styles.imgParent}><img src={`http://localhost:8080/python-ast/${imgCode}`} style={styles.AST}/></div>}
      </Paragraph>
    </div>
  );
}

let styles = {
  container: {
    flex: 1,
    backgroundColor: '#282c34'
  },
  link: {
    color: '#61DAFB',
    textDecoration: 'none'
  },
  editor: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
    width: '40%',
    justifyContent: 'center',
    minHeight: 100,
    border: '3px solid black'
  },
  examples: {
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  submitButtons: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center'
  },
  spinnerParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgParent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AST: {
    maxWidth: '80%',
  },
  errText: {
    color: 'red',
  }
}

export default Project;