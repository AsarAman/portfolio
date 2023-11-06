"use client";

import Link from "next/link";
import Logo from "../logo/logo";
import styles from "./header.module.css";
import { Github, Linkedin, Settings, Twitter, Contact } from "lucide-react";
function Header() {
  return (
    <header className="section-center">
      <div className={styles.navbar}>
        <Logo/>
        <Link href='/contact' className={styles.icon}>
          <Contact color="#e1a6f8" className={styles.contactIcon} size={32} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
