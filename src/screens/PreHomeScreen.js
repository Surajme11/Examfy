import React from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Header from "../components/Header";
import gif from "../assests/L1.gif";
import satvik from "../assests/satvik.jpg";
import shivani from "../assests/shivani.jpg";
import shreya from "../assests/shreya.jpg";
import suraj from "../assests/suraj.jpeg";
import Scroll from "../components/Scroll";

const PreHomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Header />
      <Scroll showBelow={250}/>
      <main className="main">
        {userInfo && userInfo.isAdmin && (
          <section className="steps section container" id="dashboard">
            <div className="steps__bg">
              <h2 className="section__title-center steps__title">
                “The Online Examination System ” <br />
                &rarr; Steps to start your exam
              </h2>

              <div className="steps__container grid">
                <div className="steps__card">
                  <div className="steps__card-number">Total Subject</div>
                  <h3 className="steps__card-title">Choose Subject</h3>
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Schedule</div>
                  <h3 className="steps__card-title">Start Exam</h3>
                  
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Examiners</div>
                  <h3 className="steps__card-title">Teachers</h3>
                  
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Add Results</div>
                  <h3 className="steps__card-title">View Results</h3>
                  
                </div>
              </div>
            </div>
          </section>
        )}
        {userInfo && !userInfo.isAdmin && (
          <section className="steps section container" id="dashboard">
            <div className="steps__bg">
              <h2 className="section__title-center steps__title">
                “ The Online Examination System” <br />
                &rarr; Steps to start your exam
              </h2>

              <div className="steps__container grid">
                <div className="steps__card">
                  <div className="steps__card-number">Total Subject</div>
                  <h3 className="steps__card-title">Choose Subject</h3>
                  
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Schedule</div>
                  <h3 className="steps__card-title">Start Exam</h3>
                  
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Examiners</div>
                  <h3 className="steps__card-title">Teachers</h3>
                  
                </div>

                <div className="steps__card">
                  <div className="steps__card-number">Results</div>
                  <h3 className="steps__card-title">View Results</h3>
                  
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="about section container" id="about">
          <div className="about__container grid">
            <img src={gif} alt="" className="about__img" />

            <div className="about__data">
              <h2 className="section__title about__title">
              “Examfy” <br />
                The Online Examination System.
              </h2>

              <p className="about__description">
                Examfy is “ The Online Examination System ” which has been
                developed to override the problems like distance, time and budget
                caused by the increased no. of students participating in offline
                examination during the pandemic and curfew.
              </p>

              <div className="about__details">
                <p className="about__details-description">
                  <i className="ri-checkbox-fill about__details-icon"></i>
                  test-taker identity and testing materials security risks.
                </p>
                <p className="about__details-description">
                  <i className="ri-checkbox-fill about__details-icon"></i>
                  implementation of advanced item selection and test
                  construction algorithms.
                </p>
                <p className="about__details-description">
                  <i className="ri-checkbox-fill about__details-icon"></i>
                  deployment of "high-bandwidth" multimedia tests.
                </p>
                <p className="about__details-description">
                  <i className="ri-checkbox-fill about__details-icon"></i>
                  optimization of the "usability" of Webbased testing
                  interfaces.
                </p>
              </div>

              <a href="#contact" className="button--link button--flex">
                Get your queries
                <i className="ri-arrow-right-down-line button__icon"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="questions section" id="faqs">
          <h2 className="section__title-center questions__title container">
            Some common questions <br />
            were often asked
          </h2>

          <div className="questions__container container grid">
            <div className="questions__group">
             
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    What will happen in case there is some problem in computer
                    during the examination?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    There will be enough buffer time available to take care of
                    such problems and the time lost in change of system will be
                    duly compensated as each and every second will be recorded
                    by the server. Your given answers are saved in the server.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    How will a candidate come to know which the questions are
                    left unanswered?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    Candidate has to manually check the respective answers for
                    the given question, There will be no system check.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    What are the advantages in opting for Computer Based
                    Examination?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    It offers greater accuracy, efficiency, transparency,
                    reliability, flexibility, scalability, efficient
                    administration, minimum effort, instant results, time
                    saving, cost saving etc. when compared with traditional
                    paper-based examination.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="questions__group">
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    How a candidate can practice for Computer Based Examination and What are the procedures?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    The Mock Test will be conducted before exam session by
                    institute.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    What computer knowledge is required to appear for Computer
                    Based Examination?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    The candidate need to know only how to use computer mouse.
                    That is at the most required.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ width: 420 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    Can I answer the Computer Based Examination on my computer
                    at home or work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    Yes. The Computer Based Examinations are offered in secure
                    browser environment. You must have latest version of browser
                    (Chrome or Mozilla Firefox) on you device.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>
        <section className="contact section container" id="contact">
          <div className="contact__container grid">
            <div className="contact__box">
              <h2 className="section__title">Ask your queries</h2>

              <div className="contact__data">
                <div className="contact__information">
                  <h3 className="contact__subtitle">
                    Call us for instant support
                  </h3>
                  <span className="contact__description">
                    <i className="ri-phone-line contact__icon"></i>
                    9064086471
                  </span>
                </div>

                <div className="contact__information">
                  <h3 className="contact__subtitle">Write us by mail</h3>
                  <span className="contact__description">
                    <i className="ri-mail-line contact__icon"></i>
                    examfy@email.com
                  </span>
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mlezlzll"
              method="post"
              className="contact__form"
            >
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Email"
                className="contact__input"
              />
              <input
                type="mail"
                name="Sender"
                id="Sender"
                placeholder="Subject"
                className="contact__input"
              />
              <textarea
                name="Message"
                id="Message"
                placeholder="Questions"
                cols="0"
                rows="10"
                className="contact__input"
              ></textarea>
              <button type="submit" className="contact__button button">
                Send Message
              </button>
            </form>
          </div>
        </section>
        {userInfo && userInfo.isAdmin && (
          <section className="steps section container" id="team">
            <h2 className="section__title-center steps__title">Our Team</h2>

            <div className="steps__container grid">
              <div className="steps__card">
                <img src={satvik} alt="" />
                <h3 className="steps__card-title">Satvik Srivastava</h3>
              </div>

              <div className="steps__card">
                <img src={shreya} alt="" />
                <h3 className="steps__card-title">Shreya Sarkar</h3>
              </div>

              <div className="steps__card">
                <img src={shivani} alt="" />
                <h3 className="steps__card-title">Shivani Kumari</h3>
              </div>

              <div className="steps__card">
                <img src={suraj} alt="" />
                <h3 className="steps__card-title">Suraj Kr. Mehta</h3>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer section">
        <p className="footer__copy">&#169; Examfy. All rigths reserved</p>
      </footer>
    </div>
  );
};

export default PreHomeScreen;
