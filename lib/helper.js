import { validateHeaderValue } from "http";

const baseURL = "http://localhost:3000/api/posts"

export default async function getPost(id) {
    const res = await fetch(`${baseURL}`)
    const Posts = await res.json()

    if(id) {
        return Posts.find(value => value.id == id)
    }

    return Posts;
}