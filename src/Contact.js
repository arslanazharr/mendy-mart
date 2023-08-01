import "./styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-main">
        <div className="contact-details">
          <h2>We're here to help!</h2>
          <div className="contact-details-">
            <h3>Customer Support</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              ducimus modi? Fuga mollitia officiis ducimus voluptatum optio a
              vitae quo?
            </p>
          </div>
          <div className="contact-details--">
            <p>
              <strong>Email:</strong> contact@mendymart.com
            </p>
            <p>
              <strong>Phone:</strong> +92 123 456 789
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form action="POST">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              autoComplete="off"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="off"
            />
            <textarea
              name="textarea"
              required
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
          </form>
          <button className="contact-form-btn">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
