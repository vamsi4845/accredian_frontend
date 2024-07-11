import {
  Footer,
  Header,
  Hero,
  Testimonials,
  Benefits,
  Refer,
} from "./components";
export default function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Refer />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
