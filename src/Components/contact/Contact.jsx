import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import email_icon from "../../assets/mail-icon.png";
import number_icon from "../../assets/phone-icon.png";
import address_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "19932b95-7413-4ff3-b83d-c44cfd6a37b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            We are here to help you with any questions or concerns you may have.
            Feel free to reach out to us using the contact information below.
            Our team is dedicated to providing you with the best support and
            assistance.
          </p>
          <ul>
            <li>
              <img src={number_icon} alt="" /> +1-234-567-8901
            </li>
            <li>
              <img src={email_icon} alt="" /> support@educationwebsite.com
            </li>
            <li>
              <img src={address_icon} alt="" /> 1234 Elm Street, Suite 567,
              Cityville, USA
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
            />
            <label htmlFor="">Write Your Message Here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button className="btn dark-btn" type="submit">
              Submit Now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
