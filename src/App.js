import React  from "react";
import {
    BrowserRouter,
    HashRouter as Router,
    Route
} from "react-router-dom";

import AllUSers from "./Components/AllUSers";

function App() {



  return (
    <div className="App">
        <BrowserRouter>
                <Router>
                    <React.Fragment>
                        <Route path="/" exact={true} component={AllUSers} />
                    </React.Fragment>
                </Router>
        </BrowserRouter>

    </div>
  );
}

export default App;
