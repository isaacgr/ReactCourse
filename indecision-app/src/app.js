console.log('App.js is running!');

const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: [
    'One',
    'Two'
  ]
};

//App Title
const template = (
  <div>
    <h1>
      {app.title}
    </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
);

const user = {
  name: 'Isaac',
  age: 26,
  location: 'Hamilton'
};

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  }
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
