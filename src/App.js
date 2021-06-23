// import logo from "./logo.svg";
// import React, { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import HomeScreenContent from "./Components/HomeScreenContent/HomeScreenContent";
// import PropertyDetailPage from "./Components/PropertyDetailPage/PropertyDetailPage";

// function App() {
//   const [isOpenProperty, setOpenProperty] = useState(false);

//   const openProperty = (value = true) => {
//     setOpenProperty(value);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           {!isOpenProperty ? (
//             <HomeScreenContent openProperty={openProperty} />
//           ) : (
//             <PropertyDetailPage openProperty={openProperty} />
//           )}
//         </div>
//       </header>
//       <footer>copyright </footer>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from './components/Home';
import HomeScreenContent from "./Components/HomeScreenContent/HomeScreenContent";
import EventsList from "./Components/EventsList/EventsList";

// import About from './components/About';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/events"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav> */}
          {/* <hr /> */}
          <Switch>
            <Route exact path="/" component={HomeScreenContent} />
            <Route path="/events" component={EventsList} />
            {/* <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
