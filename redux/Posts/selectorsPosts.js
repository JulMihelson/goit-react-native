export const selectPosts = (state) => state.posts.posts;
export const selectPostId = (state) => state.posts.currentPost;

export const selectCurrentPostId = () => {
  //   const posts = selectPosts();
  //   const id = selectPostId();
  //   return posts.find((post) => post.id === id);
};
