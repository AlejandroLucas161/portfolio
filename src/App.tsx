import { FunctionComponent } from "react";
import { About, Banner, Navbar } from "./components";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <About />
    </>
  );
};

export default App;
