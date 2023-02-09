import { Row, Col, Button } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToStr";

const Posts = () => {

  const posts = useSelector(getAllPosts)

  return (
    <Row className="mb-2">
      {posts.map(post =>
        <Col key={post.id} lg={4} md={6} s={12}>
          <div className="mb-4 p-3 square border">
            <h2>{post.title}</h2>
            <p><span className="fw-bold">Author:</span> {post.author}</p>
            <p><span className="fw-bold">Published:</span> {dateToStr(post.publishedDate)}</p>
            <p><span className="fw-bold">Category:</span> {post.category}</p>
            <p>{post.shortDescription}</p>
            <Link to={"/post/" + post.id}><Button variant="primary">Read more</Button></Link>
          </div>
        </Col>
      )}
    </Row>
  )
}

export default Posts;