import { Col, Container, Row } from "react-bootstrap";
import clsx from "clsx";
import styles from "./MainLayout.module.scss";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

function MainLayout() {
  return (
    <div className={clsx(styles.container)}>
      <Header />
      <Container fluid>
          <Container fluid="xl">
            <div className={clsx(styles.content)}>
              <Row>
                <Col xl={3}>
                  <SideBar />
                </Col>
                <Col xl={9}>
                  <Outlet />
                </Col>
              </Row>
            </div>
          </Container>
      </Container>
    </div>
  );
}

export default MainLayout;
