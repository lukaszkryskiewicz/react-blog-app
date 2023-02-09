import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";


const PostForm = (props) => {
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const [newPost, setNewPost] = useState({
    title: props.title || '',
    shortDescription: props.shortDescription || '',
    content: props.content || '',
    publishedDate: props.publishedDate || new Date(),
    author: props.author || ''
  })
  const [contentError, setContentError] = useState(false)
  const [dateError, setDateError] = useState(false)

  const handleChange = (e) => {
    if (e.target !== undefined) {
      setNewPost({
        ...newPost,
        [e.target.name]: e.target.value
      })
    } else if (typeof (e) === 'string') {
      setNewPost({
        ...newPost,
        content: e
      })
    } else {
      setNewPost({
        ...newPost,
        publishedDate: e

      })
    }
  }

  const handleSubmit = () => {
    setContentError(!newPost.content)
    setDateError(!newPost.publishedDate)
    if (newPost.content && newPost.publishedDate) {
      props.action(newPost)
    }
  }

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <FormGroup register={register} errors={errors} type="text" placeholder="Enter title" name={"title"} value={newPost.title} onChange={handleChange}>Title</FormGroup>
      <FormGroup register={register} errors={errors} type="text" placeholder="Enter author" name={"author"} value={newPost.author} onChange={handleChange}>Author</FormGroup>
      <DatePicker selected={newPost.publishedDate} onChange={(date) => handleChange(date)} />
      {dateError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      <FormGroup register={register} errors={errors} type="text" as="textarea" rows={3} placeholder="Write here" name="shortDescription" value={newPost.shortDescription} onChange={handleChange}>Short description</FormGroup>
      <Form.Label> Content:</Form.Label>
      <ReactQuill theme="snow" placeholder="Write here" value={newPost.content} onChange={handleChange}></ReactQuill>
      {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      <Button className="m-3" variant="primary" type="submit" >
        {props.actionText}
      </Button>
    </Form>
  )
}

export default PostForm;