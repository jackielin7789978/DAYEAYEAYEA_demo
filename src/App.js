import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Home } from "./pages/index";

const Page = styled.div``;
export default function App() {
  return (
    <Page>
      <Navbar />
      <Home />
      <Footer />
    </Page>
  );
}
