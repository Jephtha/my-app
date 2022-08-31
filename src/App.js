import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


// function Hello(props) {
//   return <h2>Hello {props.name}!</h2>;
// }

function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

function App() {

  // return <div>
  //   <Hello name="David" />
  //   <Hello name="James" />
  //   <Hello name="Amy" />
  // </div>;

  return <div>
  <Item name="Cheese" price="4.99" />
  <Item name="Bread" price="1.5" />
  <Item name="Ice cream" price="24" />
  </div>;
  
}

class Hello extends React.Component {
  state = {
    name: "James"
  }
  render() {
    return <p>Hello, {this.state.name}!</p>;
  }
} 

const el = <Hello />; 
ReactDOM.render(
  el,
  document.getElementById('root')
);

// let counter = 0;
// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(el, document.getElementById('root'));
// }

// setInterval(show, 1000);

export default App;
