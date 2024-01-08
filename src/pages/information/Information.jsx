import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCheckCircle,
  faHandshake,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <section className="section1">
            <h2 style={{ color: "#0d6efd" }}>
              Welcome to MarketHub Connect - Your Global Shopping Destination!
              <span>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#0d6efd" }}
                  icon={faGlobe}
                  className="icon"
                />
              </span>
            </h2>
            <p className="text-muted">
              At MarketHub Connect, we redefine the online shopping experience
              by bringing together a world of possibilities under one virtual
              roof. Our commitment is to connect you with a diverse array of
              products, curated for quality and sourced from around the globe.
            </p>
          </section>

          <section className="section2">
            <h4 className="title-text" style={{ color: "#0d6efd" }}>
              About Us:{" "}
              <span>
                <FontAwesomeIcon
                  style={{ color: "#0d6efd" }}
                  icon={faHandshake}
                  className="icon"
                />
              </span>
            </h4>
            <p className="text-muted">
              At the heart of MarketHub Connect is a passion for connecting
              people with the products that enrich their lives. Our platform is
              designed to transcend borders, offering a marketplace where buyers
              and sellers converge in a seamless, secure, and user-friendly
              environment.
            </p>
          </section>

          <section className="section3">
            <h4 className="title-text" style={{ color: "#0d6efd" }}>
              Why Choose MarketHub Connect:{" "}
              <span>
                {" "}
                <FontAwesomeIcon
                  style={{ color: "#0d6efd" }}
                  icon={faCheckCircle}
                  className="icon"
                />{" "}
              </span>{" "}
            </h4>
            <ul>
              <li>
                <strong>Global Variety:</strong> Explore a vast selection of
                products from all corners of the world. MarketHub Connect is
                your gateway to a truly global marketplace.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We prioritize quality. Every
                product on our platform undergoes rigorous scrutiny to ensure it
                meets our high standards, providing you with a shopping
                experience you can trust.
              </li>
              <li>
                <strong>Seamless Connection:</strong> Our platform is built to
                facilitate easy and secure transactions. Connect with sellers,
                discover unique items, and shop with confidence.
              </li>
              <li>
                <strong>Diverse Sellers:</strong> MarketHub Connect brings
                together a diverse community of sellers, each offering something
                unique. From established brands to emerging artisans, our
                platform celebrates diversity in every form.
              </li>
            </ul>
          </section>

          <section className="section4">
            <h4 className="title-text" style={{ color: "#0d6efd" }}>
              Contact Us:{" "}
              <span>
                <FontAwesomeIcon
                  style={{ color: "#0d6efd" }}
                  icon={faEnvelope}
                  className="icon"
                />
              </span>
            </h4>

            <p className="text-muted">
              Have a question, suggestion, or need assistance? Our dedicated
              customer support team is here to help. Reach out to us at{" "}
              <a href="mailto:support@markethubconnect.com">
                support@markethubconnect.com
              </a>
              , and we'll ensure your shopping experience remains smooth and
              enjoyable.
            </p>
          </section>

          <p className="text-muted description">
            Join MarketHub Connect today and embark on a global shopping
            journey, where variety and conn ection seamlessly converge. Happy
            shopping!
          </p>
        </div>

        <div className="col-md-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d370.2156410497115!2d44.77785577993605!3d41.717695665677724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1703450734315!5m2!1sen!2sge"
            width="100%"
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
