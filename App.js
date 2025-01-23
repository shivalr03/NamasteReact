import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1',{id:'heading'},"Hello World I am a React🚀");
const heading2 = React.createElement('h1',{id:'heading'},"Hello World I am a JS");
const body = React.createElement('div',{},[heading,heading2])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(body);