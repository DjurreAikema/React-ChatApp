import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* React-Router component */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header component */}
            <Header />

            <div className="app__body">
              {/* Sidebar component */}
              <Sidebar />

              <Switch>
                {/* TODO: Change room to channel */}
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
