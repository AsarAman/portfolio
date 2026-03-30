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
                <h2>FixMyImage</h2>
                <p>
                  Online photo editing website which can help users edit images with ai and manually.
                </p>
                <div className={styles.btns}>
                  <a
                    className={styles.view}
                    href="https://fixmyimage.me/"
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/asar-image-edit">
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
                  src="/Jobify.png"
                  alt="portfolio-project-cover-image"
                />
              </div>
              <div className={styles.projectInfo}>
                <h3>Web Dev</h3>
                <h2>AI Agent Builder</h2>
                <p>
              A web app which lets you build ai agents.
                </p>
                <div className={styles.btns}>
                  <a
                    href="https://botbuilder-asar.vercel.app/"
                    className={styles.view}
                  >
                    View Project
                  </a>
                  <a href="https://github.com/AsarAman/botbuilder">
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
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
