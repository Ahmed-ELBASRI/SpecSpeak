import React from "react";
import "./contact.css";
import { TfiEmail, TfiMap, TfiMobile } from "react-icons/tfi";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
import { ScrollRestoration } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <PageHeader pageName={"Get In Touch"} sortName={"Contact"} />
      {/* --------- START ADDRESS --------- */}
      <section className="address_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address">
                <i>
                  <TfiMap />
                </i>
                <h4>Our Location</h4>
                <p>
                3rd floor، 28 Bd Abderrahim Bouabid <br /> Oujda 60000
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address sabr">
                <i>
                  <TfiMobile />
                </i>
                <h4>Telephone</h4>
                <p>(+212) 05365-07365</p>
                {/* <p>(+1) 411 315 8138</p> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address">
                <i>
                  <TfiEmail />
                </i>
                <h4>Send email</h4>
                <p>contact@novelis.io</p>
                <p>support@novelis.io</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- END ADDRESS ---------  */}

      {/* ------ start CONTACT */}
      <section id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title-two">
            <h2>Send your message.</h2>
          </div>
          <div className="row">
            <div
              className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="#"
                  onsubmit="return validation();"
                >
                  <div className="row">
                    <div className=" col-md-6">
                      <InputFiled
                        label={"Name"}
                        name={"name"}
                        type={"text"}
                        required={true}
                        placeholder={""}
                      />
                    </div>
                    <div className=" col-md-6">
                      <InputFiled
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        required={true}
                        placeholder={""}
                      />
                    </div>
                    <div className=" col-md-12">
                      <InputFiled
                        label={"Your Subject"}
                        name={"subject"}
                        type={"text"}
                        required={true}
                        placeholder={""}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label for="">Your Message</label>
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="home_one"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------- END CONTACT */}

      <ScrollRestoration/>
    </>
  );
};

export default Contact;
