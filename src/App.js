import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const TodoList = lazy(() => import('./TodoList'));
const Login = lazy(() => import('./routes/LoginPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;