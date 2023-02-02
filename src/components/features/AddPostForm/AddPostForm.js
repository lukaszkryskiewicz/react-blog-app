import { Form, Button } from "react-bootstrap";
import { addPost } from "../../../redux/postsRedux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let valid = 1
    for (const property in newPost) {
      valid = valid * newPost[property].length
    }
    return Boolean(valid)
  };

  const [newPost, setNewPost] = useState({
    title: '',
    shortDescription: '',
    content: '',
    publishedDate: '',
    author: ''
  })

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(newPost));
    navigate("/");

  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup type="text" placeholder="Enter title" name={"title"} onChange={handleChange}>Title</FormGroup>
      <FormGroup type="text" placeholder="Enter author" name={"author"} onChange={handleChange}>Author</FormGroup>
      <FormGroup type="date" placeholder="Published date" name="publishedDate" onChange={handleChange}>Published Date</FormGroup>
      <FormGroup type="text" as="textarea" rows={3} placeholder="Write here" name="shortDescription" onChange={handleChange}>Short description</FormGroup>
      <FormGroup type="text" as="textarea" rows={10} placeholder="Write here" name="content" onChange={handleChange}>Content</FormGroup>
      <Button variant="primary" type="submit" disabled={!validate()}>
        Add Post
      </Button>
    </Form>

  )

}

export default AddPostForm;