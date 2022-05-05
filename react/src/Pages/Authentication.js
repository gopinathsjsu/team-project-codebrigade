import React from "react";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import "./../Styles/searchBar.css";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Authentication = () => {
  const navigate = useNavigate();
  return <>
    <Header />
    <div className="Contents">
      <div className="fields-container">
        <Row>
          <h2 className="title">Who you are?</h2>
        </Row>
        <Row className="margintop10">
          <Col>
            <Button onClick={() => navigate("/SignUpAdmin")}>SignIn as Admin</Button>
          </Col>
          <Col>
            <Button onClick={() => navigate("/SignUp")}>SignIn as User</Button>
          </Col>
        </Row>
      </div>
    </div>

  </>;
};

export default Authentication;
