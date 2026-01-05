const Experience = () => {
  return (
    <section className="section">
      <h3 className="section-title">Experience</h3>
      <div className="item">
        <h4>Frontend Developer</h4>
        <span>Freelance · 2022 - present</span>
        <p>
          Built a responsive web interfaces using React and modern CSS. Focused
          on performance, accessibility and clean code.
        </p>
      </div>
      <div className="item">
        <h4>Frontend Developer - Personal</h4>
        <span>React · JavaScript · APIs</span>
        <ul>
          <li>
            Developed a weather application using React and a public weather API
            to display real-time weather data based on user search
          </li>
          <li>
            Implemented asynchronous APIs calls, loading states, and error
            handling using modern JavaScript
          </li>
          <li>
            Designed responsive UI with reusable components and clean styling
            for both light and dark themes
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
