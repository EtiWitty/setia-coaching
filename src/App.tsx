import { useState } from "react";
import { Hero } from "./components/Hero";
import { Audiences } from "./components/Audiences";
import { Perspective } from "./components/Perspective";
import { Contact, Evidence, Footer, Leaders, Nav, Paths, Privacy, Sources, WhatIsCoaching, WhyLeaders } from "./components/sections";

export default function App() {
  // Choosing a path ("authority" or "team") preselects it in the contact form.
  const [interest, setInterest] = useState("");
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Perspective />
        <Audiences />
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
