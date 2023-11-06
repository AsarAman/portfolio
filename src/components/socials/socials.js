import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import styles from './socials.module.css'
function Socials(){
    return(
        <div className={styles.footerSocials}>
          <a href="">
            <Twitter color="#e1a6f8" />
          </a>
          <a href="">
            <LinkedinIcon color="#e1a6f8" />
          </a>
          <a href="">
            <GithubIcon  color="#e1a6f8"/>
          </a>
        </div>
    )
}

export default Socials