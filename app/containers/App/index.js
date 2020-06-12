/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import HeaderCom from '../../components/HeaderCom';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="container">
      <HeaderCom />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
