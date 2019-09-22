import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import { TodoItemsContextProvider } from "./components/context/TodoItemsContext";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <TodoItemsContextProvider>
    <Router>
      <div>
        <Route path="/todos" exact component={TodosPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={AboutPage} />
      </div>
    </Router>
    </TodoItemsContextProvider>
  );
};

export default App;
