import * as React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IconFont from "./components/IconFont";
import Home from "./pages/Home";

function Index() {
  return <h2>Index</h2>
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <IconFont name='person' size={80} />
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <IconFont name='person' size={60} />
    </div>
  )
}

function AppRouter() {
  return (
    <Router>
      <div>
        <div><Link to='/home'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>
        <div><Link to='/users'>Users</Link></div>
      </div>
      <div>
        <Route path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;