import { FunctionComponent } from "react";
import {
  About,
  Banner,
  Experience,
  Navbar,
  Skills,
  References,
  Work,
} from "./components";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Experience />

      <Work />

      <References />
    </>
  );
};

export default App;
