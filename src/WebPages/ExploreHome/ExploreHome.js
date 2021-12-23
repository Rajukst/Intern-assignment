import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreHome = ({ allData }) => {
  console.log(allData);
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>name: {allData.name}</Card.Title>
            <Card.Title>Country: {allData.country}</Card.Title>
            <Card.Title>
              Visit Website:
              <a target="_blank" href={allData.web_pages[0]}>
                {allData.web_pages[0]}
              </a>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ExploreHome;
