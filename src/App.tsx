import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { LandingPage } from './pages/landing/components/LandingPage';

const StonksViewer: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" element={<LandingPage />} />
      <Route path="/users/:userId" />
      <Route path="/quotes/:stockSymbol" />
      <Route path="/dashboard/:userId" />
    </Switch>
  );
};

export default StonksViewer;
