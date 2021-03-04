import React from 'react';
import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './style.css'
import MyRoutes from './pages'
export default function App() {
  return (
    <Router basename='graniteUi'>
        <Switch>
          <MyRoutes/>
        </Switch>
    </Router>
  );
}
