"use client";
import { motion } from "framer-motion";
import Socials from "@/components/socials/socials";
import styles from "./page.module.css";

import {
  CheckCircle,
  ChevronDown,
  GraduationCap,
  User2,
  UserCircle,
} from "lucide-react";

const metadata = {
  title: "Asar Portfolio/Resume",
  description: "Syed Asar Aman Portfolio website",
};
function Resume() {
  return (
    <section className="section-center">
      <motion.div
        initial={{ opacity: 0, y: "500px" }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.grid}
      >
        <div className={styles.gridItem}>
          <User2 size={40} color="#e1a6f8" />
          <h1>Resume</h1>
          <p>
            Want to see my full resume. Click the below button to download it.
          </p>
          <a className={styles.btn} download href="full-stack-developer-resume.pdf">
            Download <ChevronDown color="#e1a6f8" size={24} />{" "}
          </a>
        </div>
        <div className={styles.gridItem}>
          <UserCircle color="#e1a6f8" size={40} />
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
          <GraduationCap size={40} color="#e1a6f8" />
          <h1>My Education</h1>
          <p>My education is:</p>
          <p className={styles.education}>
            Bachelor in Software Engineering - 2020/2024
          </p>
        </div>
        <div className={styles.gridItem}>
          <CheckCircle color="#e1a6f8" size={40} />
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
      </motion.div>
    </section>
  );
}

export default Resume;
