import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import { TodoItemsContextProvider } from "./components/context/TodoItemsContext";
import HomePage from "./pages/HomePage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App: React.FC = () => {
  const initialTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  const [theme, setTheme] = useState(initialTheme);

  return (
    <MuiThemeProvider theme={theme}>
    <TodoItemsContextProvider>
    <Router>
      <div>
        <Route path="/todos" exact component={TodosPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={AboutPage} />
      </div>
    </Router>
    </TodoItemsContextProvider>
    </MuiThemeProvider>
  );
};

export default App;
