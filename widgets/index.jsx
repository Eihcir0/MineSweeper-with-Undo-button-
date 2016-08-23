import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './widgets';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root );
});
