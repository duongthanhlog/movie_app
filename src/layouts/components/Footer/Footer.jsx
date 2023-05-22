import clsx from "clsx";
import styles from "./Footer.module.scss";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

function Footer() {
  return (
    <ContentWrapper>
      <footer className={clsx(styles.container)}>
        <div className={clsx(styles.socials)}>
          <div className={clsx(styles.icon)}>
            <FaTiktok />
          </div>
          <div className={clsx(styles.icon)}>
            <BsInstagram />
          </div>
          <div className={clsx(styles.icon)}>
            <AiOutlineTwitter />
          </div>
          <div className={clsx(styles.icon)}>
            <BsYoutube />
          </div>
          <div className={clsx(styles.icon)}>
            <FaFacebookSquare />
          </div>
        </div>
        <ul className={clsx(styles.ipcList)}>
          <li>Get the IMDb App</li>
          <li>Help</li>
          <li>Site Index</li>
          <li>Box Office Mojo</li>
          <li>IMDb Developer</li>
          <li>Press Room</li>
          <li>Advertising</li>
          <li>Jobs</li>
          <li>Conditions of Use</li>
          <li>Privacy Policy</li>
          <li>Your Ads Privacy Choices</li>
        </ul>
        <div className={clsx(styles.copyRight)}>
          © 1990-2023 by IMDb.com, Inc.
        </div>
      </footer>
    </ContentWrapper>
  );
}

export default Footer;
