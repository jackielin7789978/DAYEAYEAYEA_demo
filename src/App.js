import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Home } from "./pages/index";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navbar2 from "./components/Navbar2";
import Footer2 from "./components/footer2";

const Page = styled.div``;
export default function App() {
  return (
    <Page>
      <Router basename="/">
        <Switch>
          <Route path="/2">
            <Navbar2 />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
        <Home />
        <Switch>
          <Route path="/2">
            <Footer2 />
          </Route>
          <Route path="/">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </Page>
  );
}
