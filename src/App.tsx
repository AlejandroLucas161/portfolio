import { FunctionComponent } from "react";
import { About, Banner, Experience, Navbar, Skills } from "./components";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <About />

      <Skills />

      <Experience />
    </>
  );
};

export default App;
