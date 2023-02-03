import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import FormGroup from "../FormGroup/FormGroup";

const PostForm = (props) => {
  const validate = () => {
    let valid = 1
    for (const property in newPost) {
      valid = valid * newPost[property].length
    }
    return Boolean(valid)
  };

  const [newPost, setNewPost] = useState({
    title: props.title || '',
    shortDescription: props.shortDescription || '',
    content: props.content || '',
    publishedDate: props.publishedDate || '',
    author: props.author || ''
  })

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action(newPost)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup type="text" placeholder="Enter title" name={"title"} defaultValue={newPost.title} onChange={handleChange}>Title</FormGroup>
      <FormGroup type="text" placeholder="Enter author" name={"author"} defaultValue={newPost.author} onChange={handleChange}>Author</FormGroup>
      <FormGroup type="date" placeholder="Published date" name="publishedDate" defaultValue={newPost.publishedDate} onChange={handleChange}>Published Date</FormGroup>
      <FormGroup type="text" as="textarea" rows={3} placeholder="Write here" name="shortDescription" defaultValue={newPost.shortDescription} onChange={handleChange}>Short description</FormGroup>
      <FormGroup type="text" as="textarea" rows={10} placeholder="Write here" name="content" defaultValue={newPost.content} onChange={handleChange}>Content</FormGroup>
      <Button variant="primary" type="submit" disabled={!validate()}>
        {props.actionText}
      </Button>
    </Form>
  )
}

export default PostForm;