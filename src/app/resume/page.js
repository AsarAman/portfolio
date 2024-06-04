"use client";
import { motion } from "framer-motion";
import Socials from "@/components/socials/socials";
import styles from "./page.module.css";
import PageTransition from "@/components/pagetransition/pagetransition";

import { CheckCircle, GraduationCap, User2, UserCircle } from "lucide-react";

const metadata = {
  title: "Asar Portfolio/Resume",
  description: "Syed Asar Aman Portfolio website",
};
function Resume() {
  return (
    <>
      <PageTransition />
      <section className="section-center">
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <User2 size={40} color="#3c83f6" />
            <h1>Resume</h1>
            <p>
              Want to see my full resume. Click the below button to download it.
            </p>
            <a
              className={styles.btn}
              download
              href="vue-dev.pdf"
            >
              Download
            </a>
          </div>
          <div className={styles.gridItem}>
            <UserCircle color="#3c83f6" size={40} />
            <h1>Syed Asar Aman</h1>
            <p>
              Full Stack Developer with expertise in front-end and back-end
              development, crafting innovative web solutions for enhanced user
              experiences and business success.
            </p>
            <p className={styles.email}>asaraman278@gmail.com</p>
            <Socials />
          </div>
          <div className={styles.gridItem}>
            <GraduationCap size={40} color="#3c83f6" />
            <h1>My Education</h1>
            <p>My education is:</p>
            <p className={styles.education}>
              Bachelor in Software Engineering - 2015/2019
            </p>
          </div>
          <div className={styles.gridItem}>
            <CheckCircle color="#3c83f6" size={40} />
            <h1>Skills</h1>
            <p>Here are some of my skills. </p>
            <div className={styles.skills}>
              <ul>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJS</li>
              </ul>
              <ul>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
