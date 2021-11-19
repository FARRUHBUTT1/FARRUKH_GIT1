import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/Home';
import About1 from './components/about1';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App(){
  return(




<BrowserRouter>

<Link to = "/contact"> Contact us link </Link>
<Link to = "/about"> about us link </Link>
<Link to = "/Home"> Home Your's link </Link>
<Switch>
<Route path="/" exact>
  <Home/>
</Route>


<Route path="/about">
  <About/>
</Route>

<Route path="/about1">
  <About1/>
</Route>

<Route path="/contact">
  <Contact/>
</Route>

<Route path="/Exact">
  <Home/>
</Route>

<Redirect to = "/" />
</Switch>
</BrowserRouter>
  );
}
// function App() {
//   return (
//     <div>
//       <About />
//       </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;
