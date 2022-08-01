import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "pages";

import "assets/css/App.css";
import AppLayout from "layouts/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path="/" component={Home} />
      </AppLayout>
    </Router>
  );
}

export default App;
