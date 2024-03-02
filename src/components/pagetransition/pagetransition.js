"use client";
import { motion } from "framer-motion";
import styles from "./pagetransition.module.css";

function PageTransition() {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
     
        className={styles.transition}
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className={`${styles.transition} ${styles.sectran}`}
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className={`${styles.transition} ${styles.thirdtran}`}
      ></motion.div>
    </>
  );
}

export default PageTransition;
