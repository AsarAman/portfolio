import Image from "next/image";
import styles from "./portfolio.module.css";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Asar Portfolio/Portfolio",
  description: "Syed Asar Aman Portfolio website",
};

function Portfolio() {
  return (
    <section className="section-center">
      <div className={styles.portfolio}>
        <h1 className={styles.portfolioTitle}>Portfolio</h1>
        <div className={styles.grid}>
          <div className={styles.singleProject}>
            <div className={styles.imageWrapper}>
              <Image
                width={1837}
                height={771}
                src="/port-1.png"
                alt="portfolio-project-cover-image"
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectTitle}>
                <h2>Blog WEbsite</h2>
                <p className={styles.btn}>Web Dev</p>
              </div>
              <div className={styles.viewProject}>
                <a className={styles.view} href='https://blog-app-asar.vercel.app/'>View Project</a>
                
                <a href='https://blog-app-asar.vercel.app/' className={styles.icon}>
                  <ArrowUpRight/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.singleProject}>
            <div className={styles.imageWrapper}>
              <Image
                width={1682}
                height={771}
                src="/port-2.png"
                alt="portfolio-project-cover-image"
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectTitle}>
                <h2>Ecommerce Website</h2>
                <p className={styles.btn}>Web Dev</p>
              </div>
              <div className={styles.viewProject}>

                <a className={styles.view} href="https://ecommerce-app-drab-ten.vercel.app/">View project</a>
                <a href="https://ecommerce-app-drab-ten.vercel.app/" className={styles.icon}>
                  <ArrowUpRight/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.singleProject}>
            <div className={styles.imageWrapper}>
              <Image
                width={1105}
                height={771}
                src="/port-3.png"
                alt="portfolio-project-cover-image"
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectTitle}>
                <h2>Restore Photos</h2>
                <p className={styles.btn}>Web Dev</p>
              </div>
              <div className={styles.viewProject}>
                <a className={styles.view} href="https://photo-enhancement.vercel.app/">View project</a>
                <a href="https://photo-enhancement.vercel.app/" className={styles.icon}>
                  <ArrowUpRight/>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.singleProject}>
            <div className={styles.imageWrapper}>
              <Image
                width={1105}
                height={771}
                src="/port-4.png"
                alt="portfolio-project-cover-image"
              />
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectTitle}>
                <h2>Jobify</h2>
                <p className={styles.btn}>Web Dev</p>
              </div>
              <div className={styles.viewProject}>
                <a className={styles.view} href="https://jobify-3cgo.onrender.com/landing">View project</a>
                <a href="https://jobify-3cgo.onrender.com/landing" className={styles.icon}>
                  <ArrowUpRight/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
