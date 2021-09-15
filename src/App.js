import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Home } from "./pages/index";
import { HashRouter as Router, Switch } from "react-router-dom";

import Navbar2 from "./components/Navbar2";
import Footer2 from "./components/footer2";

const Page = styled.div``;
export default function App() {
  return (
    <Page>
      {/* <Navbar /> */}
      <Navbar2 />
      <Router>
        <Switch path="/home">
          <Home />
        </Switch>
        <Switch path="/home2">{/* <Home2 /> */}</Switch>
      </Router>
      {/* <Footer /> */}
      <Footer2 />
    </Page>
  );
}
