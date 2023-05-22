import clsx from "clsx";
import { Container } from "react-bootstrap";

import { AiFillCaretDown } from "react-icons/ai";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

import Button from "../../../components/Button/Button";
import styles from "./Header.module.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Logo } from "@/assests/Icons";
import { ModalContext } from "@/context/Context";
import { memo } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

function Header() {
  const { toggleModal } = useContext(ModalContext);

  return (
    <header className={clsx(styles.container)}>
      <ContentWrapper>
        <div className={clsx(styles.content)}>
          <Link to="/">
            <Logo className={clsx(styles.logo)} />
          </Link>

          <Button
            primary
            leftIcon={<GoThreeBars className={clsx(styles.menuIcon)} />}
            className={clsx(styles.menuButton)}
            onClick={toggleModal}
          >
            Menu
          </Button>

          <Search />

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
        </div>
      </ContentWrapper>
    </header>
  );
}

export default memo(Header);
