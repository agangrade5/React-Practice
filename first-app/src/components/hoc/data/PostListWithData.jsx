import hocWithData from "./hocWithData";
import PostList from "./PostList";

const PostListWithData = hocWithData(PostList, 'https://jsonplaceholder.typicode.com/posts');

export default PostListWithData