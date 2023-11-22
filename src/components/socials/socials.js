import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import styles from './socials.module.css'
function Socials(){
    return(
        <div className={styles.footerSocials}>
          <a href="https://www.linkedin.com/in/syed-asar-aman-19710019a/">
            <Twitter color="#e1a6f8" />
          </a>
          <a href="https://www.linkedin.com/in/syed-asar-aman-19710019a/">
            <LinkedinIcon color="#e1a6f8" />
          </a>
          <a href="https://github.com/AsarAman">
            <GithubIcon  color="#e1a6f8"/>
          </a>
        </div>
    )
}

export default Socials