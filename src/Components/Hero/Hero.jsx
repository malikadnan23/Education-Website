import "./hero.css";
import darkarrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better Education for a better world</h1>
        <p>
          Empowering students with top-notch resources to achieve academic
          excellence and shape a brighter future for everyone.
        </p>
        <button className="btn">
          Explore More
          <img src={darkarrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
