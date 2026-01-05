const Projects = () => {
  return (
    <section className="section">
      <h1 className="section-title">Projects</h1>
      <div className="projects">
        <div className="project-card">
          <h4>portfolio Website </h4>
          <p>
            Built a responsive portfolio website using React and modern CSS to
            showcase projects, skills and experience, Focused on clean UI,
            accessiblity and performance
          </p>
          <div className="project-links">
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <h4>Weather Application</h4>
          <p>
            Built a weather application using React, that fetches real-time
            weather data from a public API. Implemented asynchronous data
            fetching, error handling, and dynamic UI updates based on user input
          </p>
          <div className="project-links">
            <a href="#">Live</a>
            <a href="">GitHub</a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
