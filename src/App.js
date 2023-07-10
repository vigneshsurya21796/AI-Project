import React from "react";
import "./App.css";
import { CTA, Brand, Navbar } from "./components";

import {
  Blog,
  Header,
  Possibility,
  Whatis,
  Features,
  Footer,
} from "./containers";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <Whatis />
      <Brand />
      <Features />
      <Blog />

      <CTA />
      <Footer />
    </div>
  );
}

export default App;
