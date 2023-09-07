import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="">
        <div className="gradient" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 sm:px-16">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
