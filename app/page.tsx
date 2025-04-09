import Image from "next/image";
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
    </main>
  );
}
