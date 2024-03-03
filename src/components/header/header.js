"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Logo from "../logo/logo";
import styles from "./header.module.css";
import { Moon, Sun } from "lucide-react";

function Header() {
  let { theme, setTheme } = useTheme();
  const [hasMounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <header className="section-center">
      <div className={styles.navbar}>
        <Logo />

        <button
          suppressHydrationWarning
          className={`${styles.darkToggle} ${ hasMounted && theme === "light"
          ? styles.light
          : theme === "dark"
          ? styles.dark
          : styles.dark
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {hasMounted && theme && theme === "dark" ? (
            <Sun suppressHydrationWarning color="blue" />
          ) : (
            <Moon suppressHydrationWarning color="white" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
