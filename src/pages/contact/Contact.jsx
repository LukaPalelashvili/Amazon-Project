import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faPaperPlane,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import CotactImg from "../../images/undraw-contact.svg";

const Contact = () => {
  return (
    <>
      <div style={{ margin: "70px 0 70px 0" }} className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas debitis, fugit natus?
                  </p>
                  <p>
                    <img src={CotactImg} alt="Image" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols={30}
                          rows={7}
                          placeholder="Write your message"
                          defaultValue={""}
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary rounded-0 py-2 px-4"
                        />
                        <span className="submitting" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
