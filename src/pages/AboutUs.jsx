import "../css/AboutUs.css";

function AboutUs() {
  return (
    <>
      <section className="header-about-us">
        <div className="container about-us-container">
          <h1 className="text-white">About this proyect</h1>
          <p className="fs-3 text-secondary">
            My name is Gonzalo Bascans, and Hackflix is a personal project that
            emerged as an exercise during my participation in the Hack Academy
            Coding Bootcamp. This project is for educational purposes, and I
            dedicated approximately 50 hours to its development. The main goal
            of Hackflix is to provide me with practice in using React
            technology. For the backend, the TMDb API was used.
          </p>
          <h1 className="text-white">Technologies</h1>
          <ul className="fs-3 text-secondary">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
