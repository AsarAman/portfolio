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
import { motion } from "framer-motion";

import styles from "./page.module.css";
import Link from "next/link";

function Home() {
  return (
    <section className="section-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: .5}}
        
        className={styles.grid}
        id="grid"
      >
        <Link
          href="/portfolio"
          className={`${styles.gridItem} ${styles.firstChild}`}
        >
          <Zap size={40} stroke="1" fill="#e1a6f8" />

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
          <User2 fill="#e1a6f8" size={40} stroke="1" />
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
          <Hand color="#e1a6f8" size={40} />
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
              <Laptop color="#e1a6f8" size={40} />
              <p>Web Development</p>
            </div>
            <div>
              <Figma color="#e1a6f8" size={40} />
              <p>Design</p>
            </div>
            <div>
              <Sparkles color="#e1a6f8" size={40} />
              <p>Branding</p>
            </div>
          </div>
        </div>
        <div className={styles.mailItem}>
          <a href="mailto:asaraman278@gmail.com" className={styles.mail}>
            <div>
              <Mail size={64} color="#e1a6f8" />
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
          <Rocket size={40} color="#e1a6f8" />
          <h2 className={styles.contact}>Get in touch now</h2>
          <div className={styles.moreInfo}>
            <p>Contact</p>
            <p className={styles.icon}>
              <ArrowUpRight />
            </p>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
export default Home;
