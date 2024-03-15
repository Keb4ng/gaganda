import axios from "axios";

const MakeUpApi = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1",
});

export const getData = async () => {
  const response = await MakeUpApi.get("/products.json", {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return response.data;
};

export default MakeUpApi;

// import axios from "axios";

// const postsApi = axios.create({
//   baseURL: "http://localhost:8000",
// });

// export const getPosts = async () => {
//   const response = await postsApi.get("/posts", {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   });
//   console.log(response.data);
//   return response.data;
// };

// export const addPost = async (post) => {
//   return await postsApi.post("/posts", post, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   });
// };

// export const updatePost = async (post) => {
//   return await postsApi.patch(`/posts/${post.id}`, post);
// };

// export const deletePost = async ({ id }) => {
//   return await postsApi.delete(`/posts/${id}`, id);
// };

// export default postsApi;
