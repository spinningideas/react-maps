import * as React from "react";
import "App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutedPages from "routes";
import Navigation from "components/App/Navigation";

const App: React.FC = () => {
  return (
    <Router basename="react-maps">
      <Navigation />
      <div className="app-content">
        <RoutedPages />
      </div>
    </Router>
  );
};

export default App;
