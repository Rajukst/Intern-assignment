import React, { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import ExploreHome from "../ExploreHome/ExploreHome";

const Home = () => {
  const [university, setUniversity] = useState([]);
  const [visible, setVisible] = useState(20);
  const loadData = () => {
    setVisible((prevValue) => prevValue + 20);
  };
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=India")
      .then((res) => res.json())
      .then((data) => setUniversity(data));
  }, []);
  return (
    <div>
      <h1>Showing University List</h1>
      <Row xs={1} md={4} xl={4} className="g-4 m-2">
        {university.slice(0, visible).map((getData) => (
          <ExploreHome key={getData.name} allData={getData}></ExploreHome>
        ))}
      </Row>
      <Button onClick={loadData}>Load More Data</Button>
    </div>
  );
};

export default Home;
