import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Perspective } from "./components/Perspective";
import { Philosophy } from "./components/Philosophy";
import { Footer, Nav } from "./components/sections";
import { About } from "./pages/About";
import { Article, Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { useRoute } from "./router";

// The whole site as one scrolling page, in the order the nav lists it.
function OnePage() {
  return (
    <>
      <Hero />
      <Perspective />
      <About />
      <Philosophy />
      <Services />
      <Blog />
      <Contact />
    </>
  );
}

export default function App() {
  const route = useRoute();

  // A full article opens at its top; anything else scrolls to the section in the
  // address (#services), or to the top of the page.
  useEffect(() => {
    if (route.article) window.scrollTo(0, 0);
    else if (route.anchor) document.getElementById(route.anchor)?.scrollIntoView();
  }, [route.article, route.anchor]);

  return (
    <>
      <Nav route={route} />
      <main>{route.article ? <Article slug={route.article} /> : <OnePage />}</main>
      <Footer />
    </>
  );
}
