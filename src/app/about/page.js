'use client'
import { BadgeCheck, Hand, Smile } from "lucide-react";
import styles from "./about.module.css";
import Socials from "@/components/socials/socials";
import { motion} from "framer-motion";
import PageTransition from "@/components/pagetransition/pagetransition";
import { useRouter } from "next/navigation";
const metadata = {
  title: "Asar Portfolio/About",
  description: "Syed Asar Aman Portfolio website",
};

function About() {
  const router = useRouter()
  
  return (
    <>
    <PageTransition/>
    <section className="section-center">
      <div  className={styles.grid}>
        <div className={`${styles.gridItem} ${styles.firstChild}`}>
          <Hand color="#3c83f6" size={32} />
          <h1>
            Hello, <br /> I &#39;m <span className={styles.span}> Asar</span> a
            Full-Stack Web Developer.
          </h1>
          <Socials />
        </div>
        <div className={` ${styles.secondChild}`}></div>
        <div className={`${styles.thirdChild} ${styles.gridItem}`}>
          <Smile color="#3c83f6" size={32} />
          <h2>About Me</h2>
          <p>
            Highly skilled Full Stack Developer with a strong foundation in both
            front-end and back-end development. Leveraging technical expertise
            to design and deliver cutting-edge web solutions that optimize user
            experiences and drive business success.
          </p>
        </div>
        <div className={`${styles.lastChild} ${styles.gridItem}`}>
          <BadgeCheck color="#3c83f6" size={32} />
          <h2>Experience</h2>

          <div className={styles.experience}>
            <p>Elm Company (KSA)</p>
            <div className={styles.line}></div>
            <p className={styles.year}>Full-Stack Dev (2019-2023)</p>
          </div>
         
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
