import "./testimonial.css";
import next_icon from "../../assets/next-icon.png";
import previous_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";
const Testimonial = () => {
  const slider = useRef();
  let transX = 0;

  const slideForward = () => {
    if (transX > -50) {
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  const slideBackword = () => {
    if (transX < 0) {
      transX += 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };

  return (
    <div className="testimonials">
      <img onClick={slideForward} className="next-btn" src={next_icon} alt="" />
      <img
        onClick={slideBackword}
        className="back-btn"
        src={previous_icon}
        alt=""
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Thompson</h3>
                  <span>New York, USA</span>
                </div>
              </div>
              <p>
                The university exceeded my expectations. The professors are
                knowledgeable, and the campus is beautiful. I've gained
                invaluable skills and made lifelong friends. Truly a
                transformative experience!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Arjun Patel</h3>
                  <span>Mumbai, India</span>
                </div>
              </div>
              <p>
                Enrolling here was the best decision of my life. The curriculum
                is rigorous, and the faculty is supportive. I've grown
                academically and personally, ready to face any challenge.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sophia Rossi</h3>
                  <span>Sydney, Australia</span>
                </div>
              </div>
              <p>
                I love the diverse and inclusive community. The university's
                resources and support services are top-notch, helping me succeed
                in my studies and career goals. Highly recommend it!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Liam O'Connor</h3>
                  <span>Dublin, Ireland</span>
                </div>
              </div>
              <p>
                Fantastic experience! The university offers excellent academic
                programs and extracurricular activities. The supportive
                environment and dedicated staff have prepared me well for my
                future endeavors.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
