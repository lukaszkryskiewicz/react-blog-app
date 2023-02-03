import { editPost } from "../../../redux/postsRedux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { getPostById } from "../../../redux/postsRedux";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const handleSubmit = (newPost) => {
    dispatch(editPost({ ...newPost, id }));
    navigate("/");
  }

  if (!postData) return <Navigate to="/" />

  return (
    <PostForm action={handleSubmit} actionText={"Edit Post"} {...postData} />
  )

}

export default EditPostForm;