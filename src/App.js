/**
 * Everything below here was practicing functionalities in React
 */

import React from 'react';
// import {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom'; 
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';
import './App.css';

// Simple functional component with props
// function Hello(props) {
//   return <h2>Hello {props.name}!</h2>;
// }

// Simple functional component with props
function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

// 

function App() {

  // Declaring props with a simple functional component
  return <div>
  <Item name="Cheese" price="4.99" />
  <Item name="Bread" price="1.5" />
  <Item name="Ice cream" price="24" />
  </div>;
  
}

// // Using state in a simple class component                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
// // class Hello extends React.Component {
// //   state = {
// //     name: "James"
// //   }
// //   render() {
// //     return <p>Hello, {this.state.name}!</p>;
// //   }
// // } 

// // Creating a simple increment app with a number that increments after every second
// // let counter = 0;
// // function show() {
// //   counter++;
// //   const el = <p>{counter}</p>;
// //   ReactDOM.render(el, document.getElementById('root'));
// // }
// // setInterval(show, 1000);


// // Creating a simple Counter app using class components and state, 
// // modifying the state with setState()

// // class Counter extends React.Component {
// //   state = {
// //     counter: 0
// //   }
// //   increment = () => {
// //     this.setState({
// //      counter: this.state.counter+1});
// //   }
// //   componentDidMount() {
// //     this.setState({counter: 42});
// //   }
// //   componentDidUpdate() {
// //     alert("Number of clicks: " + this.state.counter);
// //   }
// //   render() {
// //     return <div>
// //     <p>{this.state.counter}</p>
// //     <button onClick={this.increment}>Increment</button>
// //     </div>;
// //   }
// // }

// Creating a simple Counter app using a functional component and state
// implementing the useState hook
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }
//   useEffect(() => {
//     alert("Number of clicks: " + counter);
//   }, [counter]);
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>
//     Increment
//   </button>
//   </div>;
// } 

// const el = <Counter />; 
// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );

// // Km to miles Converter app
// // function Converter() {
// //   const [km, setKm] = useState(0);

// //   function handleChange(e) {
// //     setKm(e.target.value);
// //   }
// //   function convert(km) {
// //     return (km/1.609).toFixed(2);
// //   }

// //   return <div>
// //   <input type="text" value={km}
// //      onChange={handleChange} />
// //   <p> {km} km is {convert(km)} miles </p>
// //   </div>;
// // }


// // Form App
// // function AddForm() {
// //   const [sum, setSum] = useState(0);
// //   const [num, setNum] = useState(0);

// //   function handleChange(e) {
// //     setNum(e.target.value);
// //   }

// //   function handleSubmit(e) {
// //     setSum(sum + Number(num));
// //     e.preventDefault();
// //   }

// //   return <form onSubmit={handleSubmit}>
// //   <input type="number" value={num} onChange={handleChange} />
// //   <input type="submit" value="Add" />
// //   <p> Sum is {sum} </p>
// //   </form>;
// // }

// // Using lists
// function MyList(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//     <li key={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

// const arr = ["A", "B", "C"];
// const el = <MyList data={arr} />; 
// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );

/**
 * Creating a counter app using React + Redux
 */
// function incrementCounter(num) {
//     return { type: 'INCREMENT', num: num }
//   }
  
//   const initialState = {
//     count: 0
//   };
//   // Reducer function
//   function reducer(state = initialState, action) {
//     switch(action.type) {
//       case 'INCREMENT':
//         return { count: state.count + action.num };
//       default:
//         return state;
//     }
//   }
  
//   function Counter(props) {
//     function handleClick() {
//       props.incrementCounter(1);
//     }
//       return <div>
//       <p>{props.count}</p>
//       <button onClick={handleClick}>Increment</button>
//       </div>;
//   }
  
//   function mapStateToProps(state) {
//     return {
//       count: state.count
//     };
//   }
//   const mapDispatchToProps = {
//     incrementCounter
//   }
  
//   const store = createStore(reducer);
  
//   const Counters = connect(mapStateToProps, mapDispatchToProps)(Counter);
  
//   const el = <Provider store={store}>
//             <Counters/>
//           </Provider>; 
  
//   ReactDOM.render(
//     el, 
//     document.getElementById('root')
//   );

export default App;
