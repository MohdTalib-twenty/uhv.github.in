import React from "react";
import "./Style.css";

export default function Home() {
  return (
    <>
      <>
        <div className="mid  border-bottom">
          <img
            src={require("../Data/img/logo.png")}
            alt=""
            className="img-fluid px-5 pt-3"
          />
        </div>
        <div id="head" className="pt-5">
          <div className="container ">
            <div className="row mt-5">
              <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                <h3 className="text-white">Depatment of Value Education</h3>
                <h4 className="text-white">Value Education Cell(VE Cell)</h4>
                <button className="btn mt-3">
                  <a href="/contact" className="text-white ">
                    Contact Us
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* History */}
        <div id="history">
          <div className="container mt-5">
            <h2 className="text-center mt-5">History</h2>
            <hr className="w-25 m-auto" />
            <p className="mt-5 ">
              The journey of Value Education Cell in Dr. Ambedkar Institute of
              Technology for Handicapped (AITH), Kanpur has been quite
              encouraging. The cell was established on 17th November 2018 at
              AITH to address the need and role of value education to the
              development of a holistic and human world vision. A seminar has
              been organized seminar in AITH. It was conducted in the presence
              of Prof. Rachna Asthana, Director-AITH-Kanpur, Dr. Rajesh Kumar
              Gupta, Dean, Student well fair, AITH, Sri. Bhanu Pratap Singh,
              HOD-Value education department- AKTU, Director, Dean, all Hods and
              all faculties of AITH also participated in the seminar to
              understand the real need and application of Value education. It
              has been decided by the Institute that all the students should
              attend at least one workshop through year. The institute will
              organize weekly meetings with those faculty members who have gone
              through the short and/or full eight days Faculty development
              program conducted by AKTU. Many faculty members re-attended the
              eight days Faculty development program with their family members
              and also attended the higher-level workshops. Some faculty members
              are practicing this more rigorously and in continuation of the
              same they are facilitating the workshop in other institutions and
              universities as resource persons. Faculty members of the Institute
              are voluntarily conducting the workshops on their own for the
              students, faculty and staff. In such environment, we are also able
              to do evening workshops with Divyang students. We are also
              conducting the weekly meetings with Divyang and general students.
              As a result of such courses, workshop and meetings it has been
              found that the student are getting more confident in their life
              and more self-disciplined.
              <br />
              The National Education Policy (NEP 2020) has come with great
              clarity on the need for Value-Based Education (VBE) for teachers,
              students, other stakeholders, society, nation, and the world at
              large.
            </p>
          </div>
        </div>
        {/* gallery */}
        <div id="galler">
          <div className="container">
            <div className="row">
              <div className=" offset-3 col-6 mt-5">
                <h3 className="text-center">Gallery</h3>
                <hr className="w-25 m-auto" />
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide mt-5"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={3}
                      aria-label="Slide 4"
                    />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={require("../Data/img/m1.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../Data/img/m2.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../Data/img/m3.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={require("../Data/img/m4.jpeg")}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
