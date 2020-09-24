import { simpleLisp } from '@lain9293/simple-lisp';
import React, { useState } from 'react';
import ReactAce from 'react-ace-editor';
import './App.css';

const editorStyles = {
    width: 'auto',
    height: '70vh',
    fontSize: '18px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid #44475a',
    fontFamily: "font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
};

const App = () => {
    const [code, setCode] = useState('');

    const changeHandler = (text) => {
        try {
            setCode(simpleLisp.execute(text));
        } catch {
            setCode('Something went wrong =(');
        }
    };

    return (
        <div>
            <ReactAce mode="lisp" theme="dracula" style={editorStyles} onChange={(text) => changeHandler(text)} />
            <br />
            <div id="output" className="output">
                Result: {code}
            </div>
        </div>
    );
};

export default App;
