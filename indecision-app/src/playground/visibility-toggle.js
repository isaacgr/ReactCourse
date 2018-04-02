class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    };
  }
  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  };
  render() {
    return (
      <div>
        <h1>
          Visibility Toggle
        </h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Details':'Show Details'}
        </button>
        <p>{this.state.visible && 'These are details'}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// // Define app ob'id'ject for title and other site data
// const app = {
//   title: 'Visibility Toggle'
// }
//
// // Define the application root file
// // This is where react will render the content to
// const appRoot = document.getElementById('app');
//
// let visible = false;
//
// const onButtonDetails = () => {
//   visible = !visible;
//   render();
// };
//
// //Not necessary, just did for versatility
// const details = {
//   text: 'These are details'
// }
//
// // function to re-render the page
// const render = () => {
//   const page = (
//     <div>
//       {/*Need to have the content in a wrappper*/}
//       <h1>{app.title}</h1>
//       <button onClick={onButtonDetails}>
//         {visible ? 'Hide Details': 'Show Details'}
//       </button>
//       {/*{visible && <p>These are details</p>}*/}
//       {visible && <p>{details.text}</p>}
//     </div>
//   );
//   ReactDOM.render(page, appRoot);
// };
//
// // call the render function
// render();
