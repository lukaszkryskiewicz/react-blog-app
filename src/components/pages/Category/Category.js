import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { dateToStr } from "../../../utils/dateToStr";
import { getPostsByCategory } from "../../../redux/postsRedux";

const Category = () => {
  const { category } = useParams();
  const categoryPosts = useSelector(state => getPostsByCategory(state, category));
  console.log(category)
  console.log(categoryPosts)


  return (
    <>
      <Row className="justify-content-md-center">
        <h1>Category: {category}</h1>
      </Row>
      <Row className="my-5">
        {categoryPosts.length === 0
          ?
          <div>Nothing to see here</div>
          :
          categoryPosts.map(post =>
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
    </>
  )
}


export default Category;