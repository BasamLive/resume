const ThemeToggle = () => {
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
    console.log(currentTheme);
  }
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      🌙 / ☀️
    </button>
  );
};

export default ThemeToggle;
