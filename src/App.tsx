import { useState } from "react";
import { Challenges, Contact, Faq, Footer, Hero, Nav, Packages, Process, Results, WhatIsCoaching } from "./components/sections";

export default function App() {
  // Clicking "Request a proposal" on a package preselects it in the contact form.
  const [interest, setInterest] = useState("");
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIsCoaching />
        <Challenges />
        <Packages onChoose={setInterest} />
        <Process />
        <Results />
        <Faq />
        <Contact interest={interest} setInterest={setInterest} />
      </main>
      <Footer />
    </>
  );
}
