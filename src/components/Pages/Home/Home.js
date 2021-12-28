import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <section id="hero" data-aos="fade-down">
        <div className="heroCard" data-aos="fade-up">
          <h3>Note Your Path To The Cloud</h3>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h3>Services</h3>
            <p style={{ textAlign: "center" }}>
              Our services are more geared towards big data, data science and
              machine learning.In the information age , data is the new
              currency. As a company we focus helping our clients generate
              meaningful patterns with the ever growing volumes of data that is
              generated in our generation. With that in mind we provide few but
              powerful services that are listed below.
            </p>
          </div>
          <div className="section-body">
            <div className="card" data-aos="fade-up">
              <div className="card-header">
                <i className="fas fa-tasks service-icon"></i>{" "}
                <h5>Task Management</h5>
              </div>
              <div className="card-body">
                <p>
                  Get more done in one day than you can do in a whole week with
                  out task management system.
                </p>
                <p>
                  It usually takes less than a month for our clients to report
                  back to us their success story achived through subscription of
                  our services.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <div className="card-header">
                <i className="fas fa-bullseye service-icon"></i>
                <h5>Goal Tracking</h5>
              </div>
              <div className="card-body">
                <p>
                  Goal tracking helps team managers assign tasks to subodinates,
                  give time and deadlines, then easily follow up on how each
                  juniour is performing.
                </p>
                <p>
                  If organisational growth is part of company mission then you
                  need to give this service a try.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <div className="card-header">
                <i className="fas fa-cloud-upload-alt service-icon"></i>
                <h5>Cloud Access</h5>
              </div>
              <div className="card-body">
                <p>
                  Join handreds of industry leading companies in Africa who
                  manage their todos, tasks, events and projects with our cloud
                  storage package.
                </p>
                <p>
                  If you ever think about data security then you must secure all
                  your comapny data with our proven, secure cloud storage for
                  tasks and projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container contact-wrapper">
          <div
            className="section-header"
            style={{ paddingTop: "30px" }}
            data-aos="fade-up"
          >
            <h3>Track Us Online</h3>
            <p style={{ textAlign: "center" }}>
              On this new age of Web3.0 our life has shifted online. At
              notepath, we do not offer any services at a brick and mortat
              location anywhere on the planet. Although we plan to own some
              offices in mars and urenus by the end of this millenium, provided
              below are some of means to reach.
            </p>
          </div>
          <div
            className="mapAndAddress"
            style={{ marginBottom: "30px" }}
            data-aos="fade-up"
          >
            <div className="address">
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <div className="titleAndDescription">
                  <h4>Location:</h4>
                  <p>TRV Towers, Ngara Road, Nairobi</p>
                </div>
              </div>
              <div className="location">
                <i className="fas fa-envelope"></i>
                <div className="titleAndDescription">
                  <h4>Email:</h4>
                  <p>info@notepath.mail</p>
                </div>
              </div>
              <div className="location">
                <i className="fas fa-phone-alt"></i>
                <div className="titleAndDescription">
                  <h4>Call:</h4>
                  <p>0729 464 976 | 0732 066 919</p>
                </div>
              </div>
            </div>
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.833043450931!2d36.81607531475399!3d-1.2733539990712506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16d459a198e1%3A0xc124c9bcdb1f2dce!2sTRV%20Towers!5e0!3m2!1sen!2ske!4v1640249447600!5m2!1sen!2ske"
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
