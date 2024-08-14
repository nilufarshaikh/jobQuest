import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const savedTheme = localStorage.getItem("theme") || "cupcake";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "forest" : "cupcake";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
