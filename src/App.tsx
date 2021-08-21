import * as React from "react";
import "App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutedPages from "routes";
import Navigation from "components/App/Navigation";

const App: React.FC = () => {
  return (
    <div className="app-content">
      <Router basename="react-maps">
        <Navigation />
        <RoutedPages />
      </Router>
    </div>
  );
};

export default App;
