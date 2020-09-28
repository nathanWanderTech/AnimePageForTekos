import React from "react";
import AnimePage from "./Views/Pages/AnimePage/AnimePage";
import "semantic-ui-css/semantic.min.css";
import Home from "./Views/Pages/Home/Home";
import { Route, BrowserRouter } from "react-router-dom";
import AnimeHomeR from "./RevisedVersion/Views/Page/AnimeHomeR/AnimeHomeR";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/AnimePage" component={AnimePage} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/AnimeHomeR" component={AnimeHomeR} />
      </BrowserRouter>
    </div>
  );
}

export default App;
