import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const RoutedPages: React.FC = () => (
  <Suspense fallback={<div>Loading... </div>}>
    <Switch>
      <Route path="/" exact component={lazy(() => import("./pages/Home"))} />
      <Route
        path="/world-map"
        component={lazy(() => import("./pages/WorldMap"))}
      />
       <Route
        path="/united-states-map"
        component={lazy(() => import("./pages/UnitedStatesMap"))}
      />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default RoutedPages;
