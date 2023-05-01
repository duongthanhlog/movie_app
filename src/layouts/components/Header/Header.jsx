import clsx from "clsx";
import { Container } from "react-bootstrap";

import { AiFillCaretDown } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

import Button from "../../../components/Button/Button";
import styles from "./Header.module.scss";
import { Logo, LogoProIcon } from "../../../assests/Icons";
import Search from "../Search/Search";
import { Link, useLocation } from "react-router-dom";

function Header() {
  return (
    <Container fluid className={clsx(styles.container)}>
      <Container fluid="xl" className={clsx(styles.header)}>
        <Link to='/'>
          <Logo className={clsx(styles.logo)} />
        </Link>
        
        <Button
          primary
          leftIcon={<GoThreeBars className={clsx(styles.menuIcon)} />}
          className={clsx(styles.menuButton)}
        >
          Menu
        </Button>

        <Search />

        <Button primary className={clsx(styles.proLogo)}>
          <LogoProIcon />
        </Button>

        <div className={clsx(styles.sperate)}></div>

        <Button
          primary
          leftIcon={<BsFillBookmarkPlusFill size="1.6rem" />}
          className={clsx(styles.watchList)}
        >
          Watch list
        </Button>
        <Button primary className={clsx(styles.signIn)}>
          Sign in
        </Button>
        <Button
          primary
          rightIcon={<AiFillCaretDown size="1rem" />}
          className={clsx(styles.languages)}
        >
          EN
        </Button>
      </Container>
    </Container>
  );
}

export default Header;
