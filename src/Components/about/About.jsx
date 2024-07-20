import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setplay }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img
          onClick={() => {
            setplay(true);
          }}
          className="play-icon"
          src={play_icon}
          alt=""
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorows Leaders Today</h2>
        <p>
          Our university is dedicated to fostering tomorrow's leaders through
          innovative education, cutting-edge research, and a supportive
          community. We emphasize holistic development and lifelong learning for
          all students.
        </p>
        <p>
          We provide a dynamic environment where students thrive academically
          and personally. Our diverse programs and experienced faculty ensure
          students are well-prepared for their future careers.
        </p>
        <p>
          Commitment to excellence and a student-centered approach define our
          university. We empower students with the knowledge and skills needed
          to excel in an ever-changing global landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
