// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import ReactDOM from "react-dom";
// import './index.css';
// import App from "./App";
// import { BrowserRouter as Router} from "react-router-dom";

// // import AppRouter from "./AppRouter";

// //<React.StrictMode><App /><React.StrictMode>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>,
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);