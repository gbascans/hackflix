import "../css/AboutUs.css";

function AboutUs() {
  return (
    <>
      <section className="header-about-us">
        <div className="container about-us-container">
          <h1 className="text-white">Sobre este proyecto</h1>
          <p className="fs-3 text-secondary">
            Mi nombre es Gonzalo Bascans y Hackflix es un proyecto personal que
            surgió como ejercicio durante mi participación en el Coding Bootcamp
            de Hack Academy. Este proyecto tiene fines educativos y dedicé
            aproximadamente 50 horas a su desarrollo. El objetivo principal de
            Hackflix es brindarme práctica en el uso de la tecnología React.
            Para el backend, se utilizo la API de TMDb.
          </p>
          <h1 className="text-white">Tecnologías</h1>
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
