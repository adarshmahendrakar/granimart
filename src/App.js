import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './style.css'
import MyRoutes from './pages'
export default function App() {
  return (
    <Router>
        <Switch>
          <MyRoutes/>
        </Switch>
    </Router>
  );
}
