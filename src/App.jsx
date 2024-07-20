import "./App.css";
import About from "./Components/about/About";
import Campus from "./Components/campus/Campus";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Program from "./Components/program/Program";
import Testimonial from "./Components/testimonials/Testimonial";
import Title from "./Components/title/Title";
import Video from "./Components/about/videoplayer/Video";
import { useState } from "react";

function App() {
  const [play, setplay] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our program" title="What we Offer" />
        <Program />
        <About setplay={setplay} />
        <Title subtitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonial />
        <Title subtitle="contact us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Video play={play} setplay={setplay} />
    </>
  );
}

export default App;
