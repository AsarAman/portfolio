import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import styles from './socials.module.css'
function Socials(){
    return(
        <div className={styles.footerSocials}>
          <a aria-label="Twitter Profile Url" href="https://www.linkedin.com/in/syed-asar-aman-19710019a/">
            <Twitter color="#e1a6f8" />
          </a>
          <a aria-label="Linkedin Propile Url" href="https://www.linkedin.com/in/syed-asar-aman-19710019a/">
            <LinkedinIcon color="#e1a6f8" />
          </a>
          <a aria-label="Github Profile Url" href="https://github.com/AsarAman">
            <GithubIcon  color="#e1a6f8"/>
          </a>
        </div>
    )
}

export default Socials