import ThemeToggle from "./ThemeToggle";
import Printbutton from "./Printbutton";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <ThemeToggle />
        <Printbutton />
      </div>
      <h1>Basam mohamed</h1>
      <h2>React.js Developer</h2>
      <p>JavaScript · React · Node.js REST APIs · CSS</p>
    </header>
  );
};

export default Header;
