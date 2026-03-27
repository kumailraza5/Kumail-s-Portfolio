import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Fiesta Consultants</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Worked For a Year in Fiesta Consultants as a Java Developer.From 2022 to 2023.
              Worked as an intern then got a job as a Java Developer.
              Work With the desktops apps for the small student projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FlutterFlow Developer</h4>
                <h5>Team 360</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Learn the UI/UX and App Development using FlutterFlow.
              And Backend Development using Firebase and Firestore.
              Started Work on the Madad App.
              Created the whole app from scratch.
              But not published yet. Due to company budget issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Weblynx Hive</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              After So many experiences started learning react and nodejs.
              And started working as a full stack developer. Then started
              my own company Weblynx Hive. In between I also learned wordpress, webflow, shopify, And Framer.
              My all projects are available on my github & portfolio website.
              Given below are some of my projects.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
