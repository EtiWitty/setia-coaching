import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Perspective } from "./components/Perspective";
import { Philosophy } from "./components/Philosophy";
import { Footer, Nav } from "./components/sections";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { useRoute } from "./router";

function Home() {
  return (
    <>
      <Hero />
      <Perspective />
      <Philosophy />
    </>
  );
}

export default function App() {
  const route = useRoute();

  // New page: start at the top. Home-page anchor (#philosophy): scroll to it once rendered.
  useEffect(() => {
    if (route.anchor) document.getElementById(route.anchor)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route.page, route.slug, route.anchor]);

  return (
    <>
      <Nav route={route} />
      <main>
        {route.page === "home" && <Home />}
        {route.page === "about" && <About />}
        {route.page === "services" && <Services />}
        {route.page === "blog" && <Blog slug={route.slug} />}
        {route.page === "contact" && <Contact />}
      </main>
      <Footer />
    </>
  );
}
