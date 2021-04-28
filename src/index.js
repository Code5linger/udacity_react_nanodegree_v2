import { ReactComponent } from "*.svg";
import React, { useState } from "react";
import ReactDOM from "react-dom";
/*
const MathFunc = Math.random();

document.getElementById('root').innerHTML = MathFunc;
*/
/*
document.getElementById('root').innerHTML = '<h1>Hello!</h1>';
*/
/*
function Hello() {
  return <div><h1>Hello React!</h1></div>
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
*/
/*
//No Bable
function Hello() {
  //return <div><h1>Hello React!</h1></div>
  return React.createElement('h1', null, <h1>Hello React!</h1>)
}

ReactDOM.render(
  //<Hello />,
  React.createElement(Hello, null),
  document.getElementById('root')
)
*/
/*
function Button() {
  return <button>TEST</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
/*
/**
 * TODO: End of Video 2.4
 */
/*
function Button() {
  const [counter, setCounter] = useState(0);
  return <button onClick={
    () => setCounter(counter+1)
  }>{counter}</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
*/
/*
//Task!
function Button() {
  const [counter, setCounter] = useState(5);
  const HandleClick = () => setCounter(counter * 2);
  return <button onClick={HandleClick}>
    {counter}
  </button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
*/
/**
 * TODO: End of Video 2.5
 */
/*
 function Button(props) {
  //const HandleClick = () => setCounter(counter * 2);
  return <button onClick={props.onClickFunction}>
    Test
  </button>
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}
function App() {
  const [counter, setCounter] = useState(599);
  const incrementCounter = () => setCounter(counter * 2);
  return (
    <>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
    </>
  )
}
ReactDOM.render(
  //[<Button />,<Display />],
  /*
  <div>
    <Button/>
    <Display />
  </div>,
  */
/*
  <React.Fragment>
    <Button/>
    <Display />
  </React.Fragment>,
  */
/*
  <App />,
  document.getElementById('root')
)
*/
/**
 * TODO: End of Video 2.6
 */
/*
 function Button(props) {
  const HandleClick = () => props.onClickFunction(props.increment);
  return (
  <button onClick={HandleClick}> 
    +{props.increment}
  </button>
  )
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/
//07-04-21
/*
const RandomNum = Math.random();

ReactDOM.render(
  RandomNum,
  document.getElementById('root')
)
*/
/*
const HelloWorld = <h1>Hello World</h1>;

ReactDOM.render(
  HelloWorld,
  document.getElementById('root')
)
*/
/*
//document.getElementById('root').innerHTML = '<h1>Yo!</h1>';
function Hello() {
  //return <div>Hello React!</div>;
  return React.createElement('div', null, 'Hello React!!!');
}
ReactDOM.render(
  //<Hello />, //Function Component
  React.createElement(Hello, null),
  document.getElementById('root')
)
*/
/*
function Button() { //Component
  return <button>TEST</button>; //Element
}
ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
*/
/**
 * TODO: End of Video 2.4 My First React Component
 */
/*
function Button() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>
}
ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
*/
/**
 * TODO: End of Video 2.5 React Hook
 */
/*
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  )
}

function Display(props) {
  return (
  <div>{props.message}</div>
  )
}

function App() {
  const [counter, setCounter] = useState(590);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
  <>
    <Button onClickFunction={incrementCounter} increment={5}/>,
    <Button onClickFunction={incrementCounter} increment={10}/>,
    <Button onClickFunction={incrementCounter} increment={20}/>,
    <Button onClickFunction={incrementCounter} increment={50}/>,
    <Button onClickFunction={incrementCounter} increment={100}/>,
    <Display message={counter}/>
  </>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
*/
//10-04-21
//11-04-21
/*
ReactDOM.render((document.getElementById("root").innerHTML = Math.random()));
*/
/*
function Hello() {
  return <div>Hello React</div>;
}
ReactDOM.render(<Hello />, document.getElementById("root"));
*/
/*
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//1st Practice
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//2nd Practice
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//3rd Iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//4th Iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//5th iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//6th Iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//7th iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//8th iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//9th Iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//10th Iteration
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
//12-04-21
/*
function Button(props) {
  return <button onClick={props.onClickFunction}>+1</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <>
      <Button onClickFunction={incrementCounter} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
class Card extends React.Component {
  render() {
    return <div className="github-profile">One Github Profile...</div>;
  }
}
class App extends React.Component {
  render() {
    return (
      <>
        <div className="header">{this.props.title}</div>,
        <Card />
      </>
    );
  }
}

ReactDOM.render(
  <App title="The Github Card App" />,
  document.getElementById("root")
);
*/
/*
function RandomNum() {
  return Math.random() * 100;
}
ReactDOM.render(<RandomNum />, document.getElementById("root"));
*/
/*
document.getElementById("root").innerHTML = "<h1>Hello React!</h1>";
*/
/*
document.getElementById("root").innerHTML = 
*/
/*
ReactDOM.render(
  React.createElement("h1", null, "Hello React!"),
  document.getElementById("root")
);
*/
/*
function Button(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      +{props.increment}
    </button>
  );
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
function Button(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      {props.increment}
    </button>
  );
}
function Display(props) {
  return <h3>{props.message}</h3>;
}
function App() {
  const [counter, setCounter] = useState(17);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
import "./myStyles.css";

const button = {
  fontSize: "25px",
  color: "blue",
};
function Hello() {
  return <h1 className="primary">Hello!</h1>;
}
function Button(props) {
  return (
    <button
      style={button}
      onClick={() => props.onClickFunction(props.increment)}
    >
      {props.increment}
    </button>
  );
}
function Display(props) {
  return <div>{props.message}</div>;
}
function App() {
  const [counter, setCounter] = useState(17);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);
  return (
    <>
      <Hello />,
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={50} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={counter} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
//24-04-2021
function Button(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      {props.increment}
    </button>
  );
}
function Display(props) {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(17);
  const incrementCounter = (incrementValue) => setCount(count + incrementValue);
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />,
      <Button onClickFunction={incrementCounter} increment={5} />,
      <Button onClickFunction={incrementCounter} increment={10} />,
      <Button onClickFunction={incrementCounter} increment={100} />,
      <Display message={count} />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
*/
/*
import "./myStyles.css";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardList = (props) => {
  <div>
    <Card />,
    <Card />
  </div>;
};
class Card extends React.Component {
  render() {
    const profile = testData[0];
    return (
      <div className="github-profile">
        <img src="profile.avatar_url" alt="Placeholder" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>,
        <CardList />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);
*/

import "./myStyles.css";

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="#" alt="Placeholder" />
        <div className="Info">
          <div className="name">Name Goes Here ...</div>
          <div className="company">Company Here ...</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>,
        <Card />
      </div>
    );
  }
}
ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);


/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="GitHub Card App" />,
  document.getElementById("root")
);
*/
/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="GitHub Card App" />,
  document.getElementById("root")
);
*/
/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="GitHub Card App" />,
  document.getElementById("root")
);
*/
/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="GitHub Card App 3" />,
  document.getElementById("root")
);
*/
/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="The GitHub Card App 4" />,
  document.getElementById("root")
);
*/
/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
ReactDOM.render(
  <App title="The GitHub Card App 4" />,
  document.getElementById("root")
);
*/
/*
import "./myStyles.css";

class App extends React.Component {
  render() {
    return <div className="header">{this.props.title}</div>;
  }
}
ReactDOM.render(
  <App title="GitHub Card App" />,
  document.getElementById("root")
);
*/
