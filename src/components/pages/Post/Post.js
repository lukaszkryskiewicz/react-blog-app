import { useParams, Link, Navigate } from "react-router-dom";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const Post = () => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false)

  const handleDelete = () => {
    dispatch(removePost(id))
    setShow(false)
  }

  if (!postData) return <Navigate to="/" />

  return (
    <Row className="justify-content-md-center">
      <Col lg={5}>
        <h2>{postData.title}</h2>
        <p><span className="fw-bold">Author:</span> {postData.author}</p>
        <p><span className="fw-bold">Published:</span> {postData.publishedDate}</p>
        <p>{postData.content}</p>
      </Col>
      <Col lg={3}>
        <Link to={"/post/edit/" + postData.id}><Button variant="outline-info" className="m-2">Edit</Button></Link>
        <Button variant="outline-danger" onClick={handleClick}>Delete</Button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem Ipsum</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}

export default Post;