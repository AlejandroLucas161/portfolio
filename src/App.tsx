import { FunctionComponent } from "react";
import { About, Banner, Navbar, Skills } from "./components";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <About />

      <Skills />
    </>
  );
};

export default App;
