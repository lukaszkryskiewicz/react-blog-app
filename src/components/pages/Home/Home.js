import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from "../../features/Posts/Posts";


const Home = () => {

  return (
    <>
      <Row className="my-3">
        <Col><h1>All Posts</h1></Col>
        <Col className="text-end">
          <Link to="/post/add">
            <Button variant="outline-info" >Add Post</Button>
          </Link>
        </Col>
      </Row>
      <Posts />
    </>
  )
}

export default Home;