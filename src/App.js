// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div style={{height: '100%'}}>
//       <div style={{height: '100%'}} id="placeholder"></div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log(window.DocsAPI)
    new window.DocsAPI.DocEditor("placeholder", {
      "document": {
        "fileType": "docx",
        "key": "Khirz6zTPdfd7",
        "title": "Example Document Title.docx",
        // "url": "https://127.0.0.1/url-to-example-document.docx"
        "url": "http://192.168.1.101:8007/files/programfile/7764e90f-6e31-4d38-9149-de2a68ceb438/阿里云短信申请模板.doc"
      },
      "documentType": "word"
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div style={{ height: '100%' }} id="placeholder"></div>
      </div>
    )
  }
}

