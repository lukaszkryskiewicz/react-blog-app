import { addPost } from "../../../redux/postsRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newPost) => {
    dispatch(addPost(newPost));
    navigate("/");

  }

  return (
    <PostForm action={handleSubmit} actionText={"Add Post"} />
  )

}

export default AddPostForm;