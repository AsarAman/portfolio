import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../logo/logo";
import Socials from "../socials/socials";

function Footer() {
  return (
    <footer className="section-center">
      <div className={styles.footer}>
        <div className={styles.footerNav}>
          <Logo />
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
