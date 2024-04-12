import { FunctionComponent } from "react";
import { About, Banner, Experience, Navbar, Skills, Work } from "./components";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Experience />

      <Work />
    </>
  );
};

export default App;
