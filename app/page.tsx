import Image from "next/image";
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
  );
}
