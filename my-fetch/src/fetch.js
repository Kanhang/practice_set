
//it has to written in react
const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

const fetchPost=()=>{
    return fetch(POSTS_URL).then(res=>res.json());
};

const fetchComments =()=>{
    return fetch(COMMENTS_URL).then (res=>res.json());
}
 

const fetchData = async () => {
    const [posts, comments] = await Promise.all([
      fetchPost(),
      fetchComments()
    ]);  const grabAllCommentsForPost = postId =>
    comments.filter(comment => comment.postId === postId);

  const mappedPostWithComment = posts.reduce((acc, post) => {
    const allComments = grabAllCommentsForPost(post.id);
    acc[post.id] = allComments;
    return acc;
  }, {});

  console.log("mappedPostWithComment ", mappedPostWithComment);
};

fetchData();
 