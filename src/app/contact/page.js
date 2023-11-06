"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./contactpage.module.css";
import Image from "next/image";


 const metadata = {
  title: "Asar Portfolio/Contact",
  description: "Syed Asar Aman Portfolio website",
};
function ContactPage() {
  const [contactMessage, setContactMessage] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const noRef = useRef();
  const msgRef = useRef();

  async function handleRequest(e) {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = noRef.current.value;
    const message = msgRef.current.value;
    const postData = {
      name: name,
      email: email,
      number: number,
      message: message,
    };

    if (name && email && number && message) {
      try {
        const response = await fetch("api/contact", {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });

        const data = await response.json();
        console.log("data", data);
        setContactMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    if (contactMessage) {
      const timer = setTimeout(() => {
        setContactMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  });
  return (
    <section className="section-center">
      <div className={styles.contactPage}>
        <div className={styles.contactInfo}>
          <div className={styles.avatar}>
            <Image
              src="/port-avatar.png"
              alt="portfolio-avatar"
              width={100}
              height={100}
            />
          </div>
          <h1>Get in touch</h1>
          <p className={styles.para}>
            Whether you have a project in mind or simply want to connect, I
            &#39;m all ears. Don &#39;t hesitate to contact me . I &#39;m here
            to make things happen.
          </p>
          <a href="mailto:asaraman278@gmail.com" className={styles.email}>
            <h3>Email me</h3>
            <p>asaraman278@gmail.com</p>
          </a>
          <div className={styles.email}>
            <h3>Call me</h3>
            <p>+923169920767</p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <input ref={nameRef} type="text" required placeholder="Your Name" />
          <input type="email" ref={emailRef} required placeholder="Email" />
          <input type="number" required ref={noRef} placeholder="Phone" />
          <textarea rows="6" ref={msgRef} placeholder="Message" />
          {contactMessage && (
            <p className={styles.contactMessage}>{contactMessage}</p>
          )}
          <button
            onClick={handleRequest}
            className={styles.submit}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
