"use client";
import {
  Zap,
  ArrowUpRight,
  User2,
  Laptop,
  Mail,
  Figma,
  Sparkles,
  Rocket,
  Hand,
} from "lucide-react";

import styles from "./page.module.css";
import Link from "next/link";
import PageTransition from "@/components/pagetransition/pagetransition";

function Home() {
  return (
    <>
      <PageTransition />
      <section className="section-center">
        <div className={styles.grid} id="grid">
          <Link
            href="/portfolio"
            className={`${styles.gridItem} ${styles.firstChild}`}
          >
            <Zap size={40} stroke="1" fill="#3c83f6" />

            <h2>See my works</h2>
            <div className={styles.moreInfo}>
              <p>Explore</p>
              <p className={styles.icon}>
                <ArrowUpRight />
              </p>
            </div>
          </Link>

          <Link
            href="/resume"
            className={`${styles.gridItem} ${styles.secondChild}`}
          >
            <User2 fill="#3c83f6" size={40} stroke="1" />
            <h2>See my resume</h2>
            <div className={styles.moreInfo}>
              <p>See More</p>
              <p className={styles.icon}>
                <ArrowUpRight />
              </p>
            </div>
          </Link>
          <Link
            href="/about"
            className={`${styles.gridItem} ${styles.thirdChild}`}
          >
            <Hand color="#3c83f6" size={40} />
            <h2>Hi, I am Asar</h2>
            <div className={styles.moreInfo}>
              <p>A Web Developer From Pakistan</p>
              <p className={styles.icon}>
                <ArrowUpRight />
              </p>
            </div>
          </Link>

          <div className={`${styles.gridItem} ${styles.fourthChild}`}>
            <h2>What I Do</h2>
            <div className={styles.doing}>
              <div>
                <Laptop color="#3c83f6" size={40} />
                <p>Web Development</p>
              </div>
              <div>
                <Figma color="#3c83f6" size={40} />
                <p>Design</p>
              </div>
              <div>
                <Sparkles color="#3c83f6" size={40} />
                <p>Branding</p>
              </div>
            </div>
          </div>
          <div className={styles.mailItem}>
            <a href="mailto:asaraman278@gmail.com" className={styles.mail}>
              <div>
                <Mail size={64} color="#3c83f6" />
                <p>MAIL</p>
              </div>

              <p className={styles.icon}>
                <ArrowUpRight />
              </p>
            </a>
          </div>
          <Link
            href="/contact"
            className={`${styles.gridItem} ${styles.lastChild}`}
          >
            <Rocket size={40} color="#3c83f6" />
            <h2 className={styles.contact}>Get in touch now</h2>
            <div className={styles.moreInfo}>
              <p>Contact</p>
              <p className={styles.icon}>
                <ArrowUpRight />
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
