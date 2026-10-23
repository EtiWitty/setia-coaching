import { useState } from "react";
import { Contact, Evidence, Footer, Hero, Leaders, Nav, Paths, Privacy, Sources, WhatIsCoaching, WhyLeaders } from "./components/sections";

export default function App() {
  // Choosing a path ("authority" or "team") preselects it in the contact form.
  const [interest, setInterest] = useState("");
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Paths onChoose={setInterest} />
        <WhatIsCoaching />
        <WhyLeaders />
        <Evidence />
        <Leaders />
        <Privacy />
        <Contact interest={interest} setInterest={setInterest} />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
