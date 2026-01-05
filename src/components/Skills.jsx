const skillsGroups = [
  {
    title: "Frontend",
    color: "frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Flexbox", "Grid"],
  },
  {
    title: "Backend",
    color: "backend",
    skills: ["Node.js", "REST APIs"],
  },
  {
    title: "Tools",
    color: "tools",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section className="section">
      <h3 className="section-title">Skills</h3>

      {skillsGroups.map((group) => {
        return (
          <div key={group.title} className="skill-group">
            <h4 className="skill-group-title">{group.title}</h4>
            <div className="skills">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill skill-${group.color}`}
                  data-tooltip={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
