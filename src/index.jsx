import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { App } from 'components/context/App';
import { PaintingList } from 'components/painting/Card';
import { Book } from 'components/Book';



const title = <h1>Hello World</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)



