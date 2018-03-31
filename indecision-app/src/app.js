console.log('App.js is running!');

const app = {
  title: 'Indecision',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value; //points to the element that the event started on

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderDom();
  }
}

const removeAllOptions = () => {
  app.options = [];
  renderDom();
}

const onMakeDecision = () => {
  const randomNum = Math.random();
  console.log(randomNum);
}

const appRoot = document.getElementById('app');

const renderDom = () =>{
  const template = (
    <div>
      <h1>
        {app.title}
      </h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderDom();
