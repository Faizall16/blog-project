import { baseURL } from "./config";

export default async function getPost(id) {
  const res = await fetch(`${baseURL}/api/posts`);
  const Posts = await res.json();

  if (id) {
    return Posts.find((value) => value.id == id);
  }

  return Posts;
}
