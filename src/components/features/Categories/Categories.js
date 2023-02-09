import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {

  const categories = useSelector(getAllCategories)

  return (
    <>
      <Row className="mb-2">
        <Col><h1>All Categories</h1></Col>
      </Row>
      <Row className="my-2 justify-content-md-center">
        {categories.map(category =>
          <Col key={category} lg={8}>
            <div className=" p-3 square border">
              <Link to={"/categories/" + category}>{category}</Link>
            </div>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Categories;