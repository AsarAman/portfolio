"use client";
import Image from "next/image";
import styles from "./portfolio.module.css";
import { GithubIcon } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/pagetransition/pagetransition";

const metadata = {
  title: "Asar Portfolio/Portfolio",
  description: "Syed Asar Aman Portfolio website",
};

function Portfolio() {
  return (
    <>
      <PageTransition />

      <section className="section-center">
        <div className={styles.portfolio}>
          <h1 className={styles.portfolioTitle}>
            {" "}
            <span>/</span> Explore My Projects
          </h1>
          <div className={styles.grid}>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  width={450}
                  height={450}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="/blog-final.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Blog Website</h2>
                <p>
                  A personl blog website created using latest technologies like
                  NextJS with unique design and it is mobile responsive as well.
                </p>
                <div className={styles.btns}>
                  <a
                    className={styles.view}
                    href="https://blog-app-asar.vercel.app/"
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/blog-app-asar">
                    {" "}
                    <GithubIcon color="#3c83f6" size={48} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 700px"
                  src="/ecom-image.png"
                  width={450}
                  height={450}
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Ecommerce Website</h2>
                <p>
                  Ecommerce website created using latest technologies like Mern
                  Stack with advanced filtering and searching functionalities
                  with quite unique design.
                </p>
                <div className={styles.btns}>
                  <a
                    className={styles.view}
                    href="https://ecommerce-app-drab-ten.vercel.app/"
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/ecommerce-app">
                    {" "}
                    <GithubIcon color="#3c83f6" size={48} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  width={450}
                  height={450}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 700px"
                  src="/restore-final.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Restore Photos</h2>
                <p>
                  An AI website created with latest technologies like NextJS and
                  it uses advanced AI models where users can enhance their old
                  photos.
                </p>
                <div className={styles.btns}>
                  <a
                    href="https://photo-enhancement.vercel.app/"
                    className={styles.view}
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/photo-restore">
                    {" "}
                    <GithubIcon color="#3c83f6" size={48} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  width={450}
                  height={450}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 700px"
                  src="/jobify.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Job Tracking Website</h2>
                <p>
                  A job tracking website created with latest technologies like
                  Mern Stack where users can manage all their jobs efficiently.
                  It also has advanced filtering and searching functionalities
                  and it is mobile responsive as well.
                </p>
                <div className={styles.btns}>
                  <a
                    href="https://jobify-p0xo.onrender.com/landing"
                    className={styles.view}
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/jobify">
                    {" "}
                    <GithubIcon color="#3c83f6" size={48} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  width={450}
                  height={450}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 700px"
                  src="/Search-Github.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Search Github User</h2>
                <p>
                  A website which is created with ReactJS where users can Search
                  different Github users.
                </p>
                <div className={styles.btns}>
                  <a
                    href="https://search-github-users-flame.vercel.app/"
                    className={styles.view}
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/search-github-users">
                    {" "}
                    <GithubIcon color="#3c83f6" size={48} />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.singleProject}>
              <div className={styles.imageWrapper}>
                <Image
                  width={450}
                  height={450}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 700px"
                  src="/notes.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>Notes App</h2>
                <p>
                  A note taking website created with Mern Stack where users can
                  efficiently manage all their notes. It also has advanced
                  filtering and searching functionalities.
                </p>
                <div className={styles.btns}>
                  <a
                    href="https://notes-app-mern-qrh0.onrender.com/notes"
                    className={styles.view}
                  >
                    View Project
                  </a>
                  <a
                    className={styles.github}
                    href="https://github.com/AsarAman/notes-app-mern"
                  >
                    {" "}
                    <GithubIcon size={48} color="#3c83f6" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
