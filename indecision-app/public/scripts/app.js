console.log('App.js is running!');

// JSX - JavaScript XML
// JavaScript syntax extention

//var template = <p>This is JSX from app.js</p>;

var template = React.createElement(
  "h1",
  null,
  "This is JSX from app.js"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
