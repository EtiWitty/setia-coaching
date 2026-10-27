import { Audiences } from "./components/Audiences";
import { Hero } from "./components/Hero";
import { Perspective } from "./components/Perspective";
import { Philosophy } from "./components/Philosophy";
import { Footer, Nav } from "./components/sections";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Perspective />
        <Audiences />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
