import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

const StonksViewer: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" />
      <Route path="/users/:userId" />
      <Route path="/stocks/:stockId" />
      <Route path="/dashboard/:userId" />
    </Switch>
  );
};

export default StonksViewer;
