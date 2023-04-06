import React from "react";
import { Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import { MyOrder, MyProfile } from "../userAccount/MyAcc";

const UserProfile = () => {
  return (
    <div>
      <div className="mt-3 p-4" style={{ backgroundColor: "#515151", color: "white" }}>
        <h1>MY ACCOUNT</h1>
        <p style={{ marginTop: "-15px" }}>account information</p>
      </div>
      <div className="mt-5">
        <Row>
          <Col md={1}>
            <img src="../image/profile.jpg" className="border border-5 rounded-circle" width={90} alt="Profile" />
          </Col>
          <Col>
            <p className="mt-2 mb-0 ms-3 fs-5">Username</p>
            <Button variant="secondary" className="ms-3">Edit</Button>
            <Button variant="secondary" className="ms-1">
              Logout
            </Button>
          </Col>
        </Row>
      </div>
      <div>
        <h3 className="fw-semibold mt-5 border-bottom border-3">Dashboard</h3>
        <Tabs id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="order" title="My Order">

            <MyOrder/>
          
          </Tab>
          <Tab eventKey="profile" title="My Profile">

            <MyProfile/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
